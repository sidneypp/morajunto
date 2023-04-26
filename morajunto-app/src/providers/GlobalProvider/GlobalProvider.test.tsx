import { render, screen } from "@testing-library/react";
import GlobalProvider from "./GlobalProvider";

describe("GlobalProvider", () => {
  it("Should render global provider correctly", () => {
    render(
      <>
        <GlobalProvider>
          <span>Child Component</span>
        </GlobalProvider>
      </>
    );

    expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  });
});
