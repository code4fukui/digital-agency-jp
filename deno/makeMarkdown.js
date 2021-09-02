//import { csv2md } from "https://js.sabae.cc/csv2md.js";
import { csv2md } from "./csv2md.js";
//import { marked } from "https://taisukef.github.io/marked_md/marked.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const list = CSV.toJSON(await CSV.fetch("../出典.csv"));
for (const d of list) {
  const md = await csv2md({
    filename: "../" + d.ファイル名,
    title: d.タイトル,
  });
}
/*
const fn = "discussionpaper.csv";
const title = "政府CIOポータル ディスカッションペーパー";


const html = "<meta charset='utf-8'><title>" + title + "</title>\n" + marked(md) + "<hr><a href=https://github.com/code4fukui/cio-jp>src on GitHub</a>";
await Deno.writeTextFile(fn.substring(0, fn.length - 3) + "html", html);
*/
