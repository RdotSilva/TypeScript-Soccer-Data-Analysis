import fs from "fs";

// Read the entire contents of the CSV file
const matches = fs.readFileSync("football.csv", {
  encoding: "utf-8",
});

// Parse the matches into a multi-dimensional array
const parsedMatches = matches.split("\n").map((row: string): string[] => {
  return row.split(",");
});

console.log(parsedMatches);
