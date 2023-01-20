// import PageEnter, { TPageEnterProps } from "./enter";
// import { signInEnterForm } from "../../components/enter-form/enter-form.models";
// import { render } from "../../utils/render";
// import AuthController from "../../system/controllers/auth-controller/auth-controller";

// const authController = new AuthController();

// function onSubmit(evt: SubmitEvent): void {
//   evt.preventDefault();
//   const formData = new FormData(evt.target as HTMLFormElement);
//   if (!this.children.enterForm.hasError) {
//     const data = {
//       data: {
//         login: formData.get(`login`) as string,
//         password: formData.get(`password`) as string,
//       },
//     };
//     authController.login(data);
//   } else {
//     console.error(`Form has errors`);
//   }
// }

// const props: TPageEnterProps = {
//   title: `Sign In`,
//   enterForm: signInEnterForm,
//   attrs: {
//     class: `enter-page`,
//   },
//   events: {
//     submit: [onSubmit],
//   },
// };
// const pageEnter = new PageEnter(props);
// // export default pageEnter;

// render(`.app`, pageEnter);

// {
//   "first_name": "string",
//   "second_name": "string",
//   "login": "user_590",
//   "email": "test@test.ru",
//   "password": "user_590",
//   "phone": "+79161111111"
// }

// {
//   "id": 140704
// }
