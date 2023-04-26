import { render, screen } from "@testing-library/react";
import QueryClientProvider from "./QueryClientProvider";

describe("QueryClientProvider", () => {
  it("Should render query client provider correctly", () => {
    render(
      <>
        <QueryClientProvider>
          <span>Child Component</span>
        </QueryClientProvider>
      </>
    );

    expect(screen.getByText(/Child Component/i)).toBeInTheDocument();
  });
});
