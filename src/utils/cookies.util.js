import { setCookie, parseCookies, destroyCookie } from "nookies";

export const saveUserTokenOnCookie = (accessToken, rememberMe = true) => {
  setCookie(null, "token", JSON.stringify(accessToken), {
    ...(rememberMe
      ? { maxAge: Date.now() + 10 * 365 * 24 * 60 * 60 }
      : { expires: 0 }),
    path: "/",
  });
};

export const getPathFromCookie = () => {
  const cookies = parseCookies();
  return cookies.requestURL ? JSON.parse(cookies.requestURL) : "";
};
export const savePathOnCookie = (path) => {
  setCookie(null, "requestURL", JSON.stringify(path), {
    maxAge: Date.now() + 10 * 365 * 24 * 60 * 60,
    path: "/",
  });
};
export const removePathFromCookie = () => {
  destroyCookie(null, "requestURL", {
    path: "/",
  });
};

export const getUserTokenFromCookie = (ctx) => {
  const cookie = parseCookies(ctx)["token"];

  return cookie ?? null;
};

export const removeUserTokenFromCookie = () => {
  destroyCookie(null, "token", {
    path: "/",
  });
};
