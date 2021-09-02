import { CSV } from "https://js.sabae.cc/CSV.js";

export const csv2md = async ({filename, title, name, body, sortkey}) => {
  const data = CSV.toJSON(await CSV.fetch(filename));
  if (!name) {
    for (const n in data[0]) {
      name = n;
      break;
    }
  }
  if (!title) {
    title = name;
  }
  const md = [];
  md.push("# " + title);
  md.push("");
  if (sortkey) {
    data.sort((a, b) => -a[sortkey].localeCompare(b[sortkey]));
  }
  for (const d of data) {
    md.push("## " + d[name]);
    md.push("");
    if (body) {
      md.push(d[body]);
      md.push("");
    }
    md.push(Object.keys(d).filter(n => n != name && n != body && d[n]).map(n => "- " + n + ": " + d[n]).join("\n"));
    md.push("");
  }
  const fnmd = filename.substring(0, filename.length - 3) + "md";
  const smd = md.join("\n");
  await Deno.writeTextFile(fnmd, smd);
  return smd;
};
