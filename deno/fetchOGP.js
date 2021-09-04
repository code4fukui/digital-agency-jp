import { parseOGP } from "https://js.sabae.cc/parseOGP.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { Markdown } from "https://code4fukui.github.io/Markdown/Markdown.js";

const data = CSV.toJSON(await CSV.fetch("../news-url.csv"));
for (const d of data) {
  const html = await (await fetch(d["https://schema.org/url"])).text();
  const ogp = parseOGP(html);
  Object.assign(d, ogp);
}
data.reverse();
await Deno.writeTextFile("../news.csv", CSV.stringify(data));
await Deno.writeTextFile("../news.md", CSV.toMarkdown(data));
await Deno.writeTextFile("../news.html", Markdown.toHTML(CSV.toMarkdown(data)));
