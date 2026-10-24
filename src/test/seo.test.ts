import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const readProjectFile = (path: string) => readFileSync(`${process.cwd()}/${path}`, "utf8");

describe("Official SEO domain", () => {
  it("declares the requested official homepage title", () => {
    const html = new DOMParser().parseFromString(readProjectFile("index.html"), "text/html");
    expect(html.querySelectorAll("title")).toHaveLength(1);
    expect(html.title).toBe("Franklin Rafael | Site Oficial");
  });

  it("identifies the website and its owner using only the official name and URL", () => {
    const html = new DOMParser().parseFromString(readProjectFile("index.html"), "text/html");
    const data = JSON.parse(html.querySelector('script[type="application/ld+json"]')?.textContent ?? "{}");
    const website = data["@graph"].find((entry: { "@type": string }) => entry["@type"] === "WebSite");
    expect(website.name).toBe("Franklin Rafael");
    expect(website.url).toBe("https://www.franklinrafael.com/");
    const person = data["@graph"].find((entry: { "@type": string }) => entry["@type"] === "Person");
    expect(person).toEqual({
      "@type": "Person", "@id": "https://www.franklinrafael.com/#person",
      name: "Franklin Rafael", url: "https://www.franklinrafael.com/",
    });
  });

  it("declares exactly one homepage canonical on the official www address", () => {
    const html = new DOMParser().parseFromString(readProjectFile("index.html"), "text/html");
    const canonicals = html.querySelectorAll('link[rel="canonical"]');
    expect(canonicals).toHaveLength(1);
    expect(canonicals[0]?.getAttribute("href")).toBe("https://www.franklinrafael.com/");
    expect(html.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe("https://www.franklinrafael.com/");
  });

  it("uses unique official www URLs in a valid sitemap including the homepage", () => {
    const xml = new DOMParser().parseFromString(readProjectFile("public/sitemap.xml"), "application/xml");
    expect(xml.querySelector("parsererror")).toBeNull();
    expect(xml.documentElement.namespaceURI).toBe("http://www.sitemaps.org/schemas/sitemap/0.9");
    const urls = Array.from(xml.querySelectorAll("loc"), (node) => node.textContent ?? "");
    expect(urls).toContain("https://www.franklinrafael.com/");
    expect(new Set(urls).size).toBe(urls.length);
    for (const url of urls) expect(new URL(url).origin).toBe("https://www.franklinrafael.com");
  });

  it("allows general crawlers and advertises the official www sitemap", () => {
    const robots = readProjectFile("public/robots.txt");
    expect(robots).toMatch(/User-agent: \*\s+Allow: \//);
    expect(robots).not.toMatch(/^Disallow:\s*\//m);
    expect(robots).toMatch(/^Sitemap: https:\/\/www\.franklinrafael\.com\/sitemap\.xml$/m);
  });
});