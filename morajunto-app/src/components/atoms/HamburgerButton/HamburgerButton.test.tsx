import { fireEvent, render, screen } from "@testing-library/react";
import HamburgerButton from "./HamburgerButton";

describe("HamburgerButton", () => {
  it("Should render hamburger button correctly", () => {
    render(<HamburgerButton />);

    expect(
      screen.getByRole("button", { name: /open menu/i })
    ).toBeInTheDocument();
  });

  it("Should call function when click on hamburger button", () => {
    const onClick = jest.fn();

    render(<HamburgerButton onClick={onClick} />);

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));
    expect(onClick).toHaveBeenCalled();
  });
});
