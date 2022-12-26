import { TPageEnterProps } from "./enter";
import {
  signInEnterForm,
  signUpEnterForm,
} from "../../components/enter-form/enter-form.models";
import { getFormValues } from "../../utils/get-form-values";
import AuthController, {
  TReg,
} from "../../system/controllers/auth-controller/auth-controller";

const authController = new AuthController();

function onSubmitSignIn(evt: SubmitEvent): void {
  evt.preventDefault();
  const form = evt.target as HTMLFormElement;
  const formData = new FormData(form);
  if (!this.children.enterForm.hasError) {
    const data = {
      data: {
        login: formData.get(`login`) as string,
        password: formData.get(`password`) as string,
      },
    };
    authController.login(data);
    form.reset();
  } else {
    console.error(`Sign In. Form has errors`);
  }
}

function onSubmitSignUp(evt: SubmitEvent): void {
  evt.preventDefault();
  const form = evt.target as HTMLFormElement;
  const formData = new FormData(form);
  if (!this.children.enterForm.hasError) {
    const password = formData.get(`password`) as string;
    const password2 = formData.get(`password2`) as string;
    if (password === password2) {
      const data = { data: getFormValues(formData) };
      authController.registration(data as TReg);
      form.reset();
    }
  } else {
    console.error(`Sign Up. Form has errors`);
  }
}

export const signInProps: TPageEnterProps = {
  title: `Sign In`,
  enterForm: signInEnterForm,
  attrs: {
    class: `enter-page`,
  },
  events: {
    submit: [onSubmitSignIn],
  },
};

export const signUpProps: TPageEnterProps = {
  title: `Sign Up`,
  enterForm: signUpEnterForm,
  attrs: {
    class: `enter-page`,
  },
  events: {
    submit: [onSubmitSignUp],
  },
};
