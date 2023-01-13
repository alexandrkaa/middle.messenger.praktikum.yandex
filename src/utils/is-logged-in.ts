import AuthController from "../system/controllers/auth-controller/auth-controller";
const authController = new AuthController();

export const isLoggedIn = async () => {
  return authController.getUser();
};
