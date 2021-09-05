/*
import { parseOGP } from "https://js.sabae.cc/parseOGP.js";
import { CSV } from "https://js.sabae.cc/CSV.js";
import { fetchCurl } from "https://js.sabae.cc/fetchCurl.js";
// import { Markdown } from "https://code4fukui.github.io/Markdown/Markdown.js";
*/
import puppeteer from "puppeteer";
import fs from "fs";

class Browser {
  constructor() {
  }
  async init() {
    this.browser = await puppeteer.launch();
    this.page = await this.browser.newPage();
    await this.page.setDefaultNavigationTimeout(0); 
    return this;
  }
  async fetchText(url) {
    const res = await this.page.goto(url);
    const html = await res.text();
    return html;
  }
  async capture(path) {
    await this.page.screenshot({ path });
  }
  async close() {
    await this.browser.close();
  }
}

const src = "../note-url.csv";
const dst = "note.csv";

const sleep = (msec) => new Promise(resolve => setTimeout(resolve, msec));

const data = fs.readFileSync(src, "utf-8").trim().split("\n");
console.log(data);

const existsFile = (fn) => {
  try {
    fs.statSync(fn);
    return true;
  } catch (e) {
  }
  return false;
}

const browser = await new Browser().init();
for (let i = 1; i < data.length; i++) {
  const url = data[i];
  /*
  if (url == "https://digital-gov.note.jp/n/na4ecf2c538f5") {
    continue;
  }
  */
  console.log(url);
  const fn = "temp/" + url.substring(url.lastIndexOf("/") + 1);
  let text = null;
  if (!existsFile(fn)) {
    text = await browser.fetchText(url);
    fs.writeFileSync(fn, text);
    console.log("delay 3sec");
    await sleep(3000);
  } else {
    text = fs.readFileSync(fn, "utf-8");
  }
}


process.exit(0);

/*

const data = CSV.toJSON(await CSV.fetch(src));
console.log(data);
*/

//for (const d of data) {
  /*
  const res = await fetch(d["https://schema.org/url"]);
  const headers = res.headers;
  console.log(headers); // 更新日取得できず
  const html = await res.text();
  */
/*
  const html = await fetchCurl(d["https://schema.org/url"]);
  const ogp = parseOGP(html);
  Object.assign(d, ogp);
  console.log(ogp);
  break;
}
data.reverse();
await Deno.writeTextFile("../" + dst, CSV.stringify(data));
await Deno.writeTextFile("../md/" + dst.substring(0, dst.length - 3) + "md", CSV.toMarkdown(data));
//await Deno.writeTextFile("../news.html", Markdown.toHTML(CSV.toMarkdown(data)));
*/

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
