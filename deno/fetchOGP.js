import { parseOGP } from "https://js.sabae.cc/parseOGP.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { Markdown } from "https://code4fukui.github.io/Markdown/Markdown.js";
import { fetchCurl } from "https://js.sabae.cc/fetchCurl.js";

const useCurl = false;
const fetchHTML = async (url) => {
  if (useCurl) {
    return await fetchCurl(url);
  } else {
    const res = await fetch(url);
    const headers = res.headers;
    // console.log(headers); // 更新日取得できず
    const html = await res.text();
    return html;
  }
};

const data = CSV.toJSON(await CSV.fetch("../news-url.csv"));
//const data2 = CSV.toJSON(await Deno.readTextFile("../news.csv"));
for (const d of data) {

  const url = d["https://schema.org/url"];
  console.log(url);
  const html = await fetchHTML(url);

  const ogp = parseOGP(html);
  Object.assign(d, ogp);
  console.log(ogp);
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
