import fs from "node:fs";

const items = fs
  .readdirSync("./", { withFileTypes: true })
  .filter((item) => !item.isDirectory());

shuffle(items);

console.log(
  items
    .map(
      (item) => `{
  "src": "${item.name}",
  "title": "${capitalizeFirstLetter(
    item.name.split(".").shift().replace("-", " ")
  )}",
  "alt": ""
},
`
    )
    .join("")
);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}
