import { assert } from "chai";

import { HTTPTransport } from "../../../src/system/http-transport/http-transport";

describe(`HTTPTransport`, () => {
  const http = new HTTPTransport(``);
  it(`Should exist`, () => {
    assert.exists(http);
  });
  it(`Get request`, (done) => {
    http
      .get(`https://jsonplaceholder.typicode.com/todos/1`)
      .then(() => {
        done();
      })
      .catch((err) => {
        done(new Error(err.response));
      });
  });
});
