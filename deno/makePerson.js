import { CSV } from "https://js.sabae.cc/CSV.js";

const data1 = CSV.toJSON(await CSV.fetch("../デジタル庁幹部名簿.csv"));
const data2 = CSV.toJSON(await CSV.fetch("../デジタル庁人事.csv"));

const merge = (data1, data2) => {
  const data = [];
  for (const d of data2) {
    const d1 = data1.find(d1 => d.氏名 == d1.氏名);
    if (!d1) {
      data.push(d);
      continue;
    }
    const n = {};
    Object.assign(n, d);
    Object.assign(n, d1);
    data.push(n);
  }
  for (const d of data1) {
    const d2 = data2.find(d2 => d.氏名 == d2.氏名);
    if (!d2) {
      data.push(d);
      continue;
    }
  }
  return data;
};

const data = await merge(data2, data1);
console.log(data1.length, data2.length);
console.log(data.length);

data.forEach(d => {
  d.肩書 = d.肩書 == d.新 ? d.肩書 : (d.肩書 && d.新 ? d.肩書 + " " + d.新 : d.肩書 || d.新 || "");
  delete d.新;
})

const nametable = {
  "氏名": "https://schema.org/name",
  "氏名かな": "https://code4fukui.github.io/rdf/#kana",
  "種別": "https://schema.org/category",
  "肩書": "https://schema.org/jobTitle",
  //"旧": "https://schema.org/description",
};

const data0 = data.map(d => {
  const d2 = {};
  for (const name in d) {
    const name2 = nametable[name];
    if (name2) {
      d2[name2] = d[name];
    }
  }
  return d2;
});

/*
data0.sort((a, b) => a["https://schema.org/name"].localeCompare(b["https://schema.org/name"]));
console.log(data0);
*/
await Deno.writeTextFile("../digital-agency-person.csv", CSV.stringify(data0));
await Deno.writeTextFile("../digital-agency-person.json", JSON.stringify(data0, null, 2));
