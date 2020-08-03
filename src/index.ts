import fs from "fs";

// Read the entire contents of the CSV file
const matches = fs.readFileSync("football.csv", {
  encoding: "utf-8",
});

console.log(matches);
