import { act, cleanup, render } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { afterEach, expect, it, vi } from "vitest";
import ScrollToTop from "./ScrollToTop";

afterEach(() => { cleanup(); vi.useRealTimers(); vi.restoreAllMocks(); sessionStorage.clear(); });

it("aligns #galeria on entry and when selected again on the biography page", () => {
  vi.useFakeTimers();
  const scroll = vi.fn();
  vi.spyOn(window, "scrollTo").mockImplementation(() => {});
  const gallery = document.createElement("section");
  gallery.id = "galeria";
  gallery.scrollIntoView = scroll;
  document.body.append(gallery);
  let navigateAgain = () => {};
  const Navigation = () => {
    const navigate = useNavigate();
    navigateAgain = () => navigate("/o-autor/biografia#galeria");
    return <ScrollToTop />;
  };
  render(<MemoryRouter initialEntries={["/o-autor/biografia#galeria"]}><Navigation /></MemoryRouter>);
  act(() => { vi.advanceTimersByTime(1100); });
  expect(scroll).toHaveBeenCalledWith({ behavior: "instant", block: "start" });
  scroll.mockClear();
  act(() => { navigateAgain(); });
  act(() => { vi.advanceTimersByTime(1100); });
  expect(scroll).toHaveBeenCalled();
  gallery.remove();
});