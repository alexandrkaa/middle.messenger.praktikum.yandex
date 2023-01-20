const routesPaths: Record<string, string> = {
  MAIN: `/`,
  CHATS: `/messenger`,
  // CHAT: `/messenger`,
  SIGN_UP: `/sign-up`,
  SIGN_IN: `/sign-in`,
  PROFILE: `/settings`,
  NOT_FOUND: `/404`,
  SERVER_ERROR: `/500`,
};

routesPaths.PROFILE_EDIT = `${routesPaths.PROFILE}/edit`;
routesPaths.PROFILE_PASSWORD = `${routesPaths.PROFILE}/password`;

export { routesPaths };
