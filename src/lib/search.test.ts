import { expect, it } from "vitest";
import { searchSite } from "./search";

it.each(["fotos", "imagens"])("routes %s to the gallery at the end of the biography", (query) => {
  expect(searchSite(query).find((entry) => entry.title === "Galeria de Fotos")?.path)
    .toBe("/o-autor/biografia#galeria");
});