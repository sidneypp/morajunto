import { useMutation } from "react-query";
import useAuthRepository from "./Auth.repository";

jest.mock("react-query", () => ({
  useMutation: jest.fn(() => [
    jest.fn(),
    { isLoading: false, isError: false, error: null },
  ]),
}));

describe("useAuthRepository", () => {
  it("should return the createAuth function", () => {
    const { createAuth } = useAuthRepository();
    expect(createAuth).toBeDefined();
  });

  describe("createAuth", () => {
    it("should call the useMutation hook with the correct mutationFn", () => {
      useAuthRepository().createAuth();
      expect(useMutation).toHaveBeenCalledWith({
        mutationFn: expect.any(Function),
      });
    });
  });
});
