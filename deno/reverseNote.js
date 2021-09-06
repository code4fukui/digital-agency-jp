import { CSV } from "https://js.sabae.cc/CSV.js";
import { DateTime } from "https://js.sabae.cc/DateTime.js";

const src = "../note-url.csv";
const data = CSV.toJSON(await CSV.fetch(src));

/*
const sortkey = (a) => {
  console.log(a["https://schema.org/datePublished"], new DateTime(a["https://schema.org/datePublished"]).getTime());
  return new DateTime(a["https://schema.org/datePublished"]).getTime();
};
data.sort((a, b) => sortkey(b) - sortkey(a));
*/
data.reverse();
console.log(data);

await Deno.writeTextFile(src, CSV.stringify(data));
