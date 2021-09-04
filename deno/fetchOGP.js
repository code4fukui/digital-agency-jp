import { parseOGP } from "https://js.sabae.cc/parseOGP.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { Markdown } from "https://code4fukui.github.io/Markdown/Markdown.js";

const data = CSV.toJSON(await CSV.fetch("../news-url.csv"));
for (const d of data) {
  const res = await fetch(d["https://schema.org/url"]);
  const headers = res.headers;
  // console.log(headers); // 更新日取得できず
  const html = await res.text();
  const ogp = parseOGP(html);
  Object.assign(d, ogp);
}
data.reverse();
await Deno.writeTextFile("../news.csv", CSV.stringify(data));
await Deno.writeTextFile("../md/news.md", CSV.toMarkdown(data));
//await Deno.writeTextFile("../news.html", Markdown.toHTML(CSV.toMarkdown(data)));

/*
参考

Headers {
  "accept-ranges": "none",
  connection: "keep-alive",
  "content-security-policy": "frame-ancestors 'self' https://*.studio.design https://studio.design https://studio.inc;",
  "content-type": "text/html; charset=utf-8",
  date: "Sat, 04 Sep 2021 13:25:36 GMT",
  etag: '"bef7-r4dqAnzeD04u1sKgDGO7ZgfAbw8"',
  host: "www.digital.go.jp",
  "strict-transport-security": "max-age=15724800;",
  "transfer-encoding": "chunked",
  vary: "Accept-Encoding",
  "x-frame-options": "SAMEORIGIN"
}
*/
