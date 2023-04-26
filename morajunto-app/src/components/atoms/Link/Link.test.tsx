import { fireEvent, render, screen } from "@testing-library/react";
import Link from "./Link";

describe("Link", () => {
  const href = "/some/path";

  it("Should render link correctly", () => {
    render(<Link href={href} />);

    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link").getAttribute("href")).toBe(href);
  });

  it("Should call function when click on link", () => {
    const onClick = jest.fn();

    render(<Link href={href} onClick={onClick} />);

    fireEvent.click(screen.getByRole("link"));
    expect(onClick).toHaveBeenCalled();
  });
});
