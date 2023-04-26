import { destroyCookie, parseCookies, setCookie } from "nookies";
import { AUTH_COOKIE_NAME, getUser, removeUser, setUser } from "./User.service";
import { UserWithToken } from "./User.types";

jest.mock("nookies", () => ({
  setCookie: jest.fn(),
  parseCookies: jest.fn(() => ({})),
  destroyCookie: jest.fn(),
}));

const user = {
  id: 1,
  access_token: "access_token",
} as UserWithToken;

describe("User Service", () => {
  describe("setUser", () => {
    it("Should set the user in the cookie", () => {
      setUser(user);

      expect(setCookie).toHaveBeenCalledWith(
        undefined,
        AUTH_COOKIE_NAME,
        JSON.stringify(user),
        {
          maxAge: AUTH_MAX_AGE,
        }
      );
    });
  });

  describe("getUser", () => {
    it("Should get the user from the cookie", () => {
      (parseCookies as jest.Mock).mockReturnValue({
        [AUTH_COOKIE_NAME]: JSON.stringify(user),
      });

      expect(getUser()).toEqual(user);
    });

    it("should return an empty object if the user is not in the cookie", () => {
      (parseCookies as jest.Mock).mockReturnValue({});

      expect(getUser()).toEqual({});
    });
  });

  describe("removeUser", () => {
    it("Should remove the user from the cookie", () => {
      removeUser();

      expect(destroyCookie).toHaveBeenCalledWith(undefined, AUTH_COOKIE_NAME);
    });
  });
});
