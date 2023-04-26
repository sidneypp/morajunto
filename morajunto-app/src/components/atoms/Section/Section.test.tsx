import { render, screen } from "@testing-library/react";
import Section from "./Section";

describe("Section", () => {
  it("Should render section correctly", () => {
    render(
      <Section>
        <h1>Heading</h1>
      </Section>
    );

    expect(
      screen.getByRole("heading", { name: /Heading/i })
    ).toBeInTheDocument();
  });
});
