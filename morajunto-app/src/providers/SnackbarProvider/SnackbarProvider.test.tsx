import { render, screen } from "@testing-library/react";
import SnackbarProvider from "./SnackbarProvider";

describe("SnackbarProvider", () => {
  it("Should snackbar provider correctly", () => {
    render(
      <SnackbarProvider>
        <span>Child Component</span>
      </SnackbarProvider>
    );

    expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  });
});
