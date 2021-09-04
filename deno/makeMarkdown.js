//import { csv2md } from "https://js.sabae.cc/csv2md.js";
import { csv2md } from "./csv2md.js";
//import { marked } from "https://taisukef.github.io/marked_md/marked.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const list = CSV.toJSON(await CSV.fetch("../出典.csv"));
for (const d of list) {
  const md = await csv2md({
    filename: "../" + d.ファイル名,
    title: d.タイトル,
    dstpath: "md/",
  });
}

const fn = "../GIGAスクール構想についてのアンケートの取りまとめ結果/関係大臣共同メッセージ.csv";
const csv = await CSV.fetch(fn);
const md = CSV.toMarkdown(csv);
await Deno.writeTextFile(fn.substring(0, fn.length - 3) + "md", md);
