import { fireEvent, render, screen, createEvent } from "@testing-library/react";
import { expect, it, vi } from "vitest";
import FAQ from "./FAQ";

vi.mock("@/components/Header", () => ({ default: () => null }));
vi.mock("@/components/Footer", () => ({ default: () => null }));

it("focuses FAQ questions without requesting viewport scrolling on pointer input", () => {
  render(<FAQ />);
  const question = screen.getAllByRole("button")[0];
  const focus = vi.spyOn(question, "focus");
  const event = createEvent.pointerDown(question);
  Object.defineProperties(event, {
    isPrimary: { value: true },
    button: { value: 0 },
  });
  fireEvent(question, event);
  expect(focus).toHaveBeenCalledWith({ preventScroll: true });
  fireEvent.click(question);
  expect(question.getAttribute("aria-expanded")).toBe("true");
});