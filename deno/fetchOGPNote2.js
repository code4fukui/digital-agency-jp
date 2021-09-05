import { parseOGP } from "https://js.sabae.cc/parseOGP.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
//import { fetchCurl } from "https://js.sabae.cc/fetchCurl.js";
// import { Markdown } from "https://code4fukui.github.io/Markdown/Markdown.js";
import HTMLParser from "https://dev.jspm.io/node-html-parser";
  
const src = "../note-url.csv";
const dst = "note.csv";

const sleep = (msec) => new Promise(resolve => setTimeout(resolve, msec));

const data = CSV.toJSON(await CSV.fetch(src));
console.log(data);

const existsFile = (fn) => {
  try {
    fs.statSync(fn);
    return true;
  } catch (e) {
  }
  return false;
}

for (const d of data) {
  const url = d["https://schema.org/url"];
  /*
  const res = await fetch(url);
  const headers = res.headers;
  console.log(headers); // 更新日取得できず
  const html = await res.text();
  */
/*
  const html = await fetchCurl(d["https://schema.org/url"]);
  */
  console.log(url);
  const fn = "temp/" + url.substring(url.lastIndexOf("/") + 1);
  const html = await Deno.readTextFile(fn);

  const dom = HTMLParser.parse(html);
  const datetime = dom.querySelector("time")?.attributes.datetime;
  d["https://schema.org/datePublished"] = datetime;

  const ogp = parseOGP(html);
  Object.assign(d, ogp);

  console.log(d);
  //break;
}
data.reverse();
await Deno.writeTextFile("../" + dst, CSV.stringify(data));
await Deno.writeTextFile("../md/" + dst.substring(0, dst.length - 3) + "md", CSV.toMarkdown(data));
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
