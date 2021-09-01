import { TEXT } from "https://js.sabae.cc/TEXT.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const txt = await TEXT.fetch("./list.txt");
const data = [];
for (let i = 0; i < txt.length; i += 5) {
  console.log(txt[i + 3]);
  const d = [];
  for (let j = 0; j < 4; j++) {
    d.push(txt[i + j]);
  }
  if (txt[i + 4] != "") {
    throw new Error("wrong data!");
  }
  data.push(d);
}
await Deno.writeTextFile("../デジタル庁人事_20210901.csv", CSV.encode(data));

