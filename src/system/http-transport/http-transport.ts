import { queryStringify } from "../../utils/mydash";
import { METHODS, DEFAULT_TIMEOUT } from "../../consts/consts";

export type TOptions = Record<string, unknown> & {
  headers?: Record<string, string>;
  method?: string;
  data?: Record<string, unknown>;
  timeout?: number;
};

export class HTTPTransport {
  private _baseUrl: string;
  constructor(baseUrl: string) {
    this._baseUrl = baseUrl;
  }
  get = (url: string, options: TOptions = { timeout: DEFAULT_TIMEOUT }) => {
    options.method = METHODS.GET;
    return this.request(this._baseUrl + url, options, options.timeout);
  };

  post = (
    url: string,
    options: TOptions = {
      timeout: DEFAULT_TIMEOUT,
    }
  ) => {
    options.method = METHODS.POST;
    return this.request(this._baseUrl + url, options, options.timeout);
  };

  put = (url: string, options: TOptions = { timeout: DEFAULT_TIMEOUT }) => {
    options.method = METHODS.PUT;
    return this.request(this._baseUrl + url, options, options.timeout);
  };

  delete = (
    url: string,
    options: TOptions = {
      timeout: DEFAULT_TIMEOUT,
    }
  ) => {
    options.method = METHODS.DELETE;
    return this.request(this._baseUrl + url, options, options.timeout);
  };

  request = (url: string, options: TOptions, timeout: number = 5000) => {
    const { headers = {}, method, data } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject("No method");
        return;
      }

      const xhr = new XMLHttpRequest();
      const isFormData = data instanceof FormData;
      const isGet = method === METHODS.GET;

      xhr.open(method, isGet && !!data ? `${url}${queryStringify(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.timeout = timeout;

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (isFormData) {
        xhr.setRequestHeader("accept", "application/json");
      } else {
        xhr.setRequestHeader("content-type", "application/json");
      }

      if (isGet) {
        xhr.send();
      } else {
        if (isFormData) {
          xhr.send(data);
        } else {
          xhr.send(JSON.stringify(data));
        }
      }
    });
  };
}
