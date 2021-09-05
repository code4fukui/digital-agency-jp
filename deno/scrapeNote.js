import { CSV } from "https:/js.sabae.cc/CSV.js";
import { HTMLParser } from "https://js.sabae.cc/HTMLParser.js";
import { ArrayUtil } from "https://js.sabae.cc/ArrayUtil.js";

const url = "https://digital-gov.note.jp";
//const html = await (await fetch(url)).text();
//await Deno.writeTextFile("note.html", html);
const html = await Deno.readTextFile("digital-gov.note.jp.html");
const dom = HTMLParser.parse(html);
const as = dom.querySelectorAll("a");
const res = [];
for (const a of as) {
  //console.log(a);
  //console.log(a.text, a.attributes.href);
  const path = a.text; // a.attributes.href;
  if (path.startsWith("/n/")) {
    const n = path.indexOf("?");
    res.push(url + (n < 0 ? path : path.substring(0, n)));
  }
  //console.log(decodeURIComponent(a.text));
}
const ar = ArrayUtil.toUnique(res).map(a => [a]);
ar.unshift(["https://schema.org/url"]);
console.log(ar);
await Deno.writeTextFile("../note-url.csv", CSV.encode(ar));
