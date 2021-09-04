import { CSV } from "https://js.sabae.cc/CSV.js";
import { diffChars } from "https://taisukef.github.io/jsdiff-es/src/diff/character.js";

const fn = "../GIGAスクール構想についてのアンケートの取りまとめ結果/関係大臣共同メッセージ.csv";
const csv = await CSV.fetch(fn);
const md = CSV.toMarkdown(csv);
await Deno.writeTextFile(fn.substring(0, fn.length - 3) + "md", md);
const csv2 = CSV.fromMarkdown(md);
console.log(diffChars(CSV.encode(csv), CSV.encode(CSV.fromJSON(csv2))));
console.log("check: ", CSV.encode(csv) == CSV.encode(CSV.fromJSON(csv2)) ? "ok" : "failed");
