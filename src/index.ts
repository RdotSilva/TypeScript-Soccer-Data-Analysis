import fs from "fs";

// Read the entire contents of the CSV file
const matches = fs.readFileSync("football.csv", {
  encoding: "utf-8",
});

// Parse the matches into a multi-dimensional array
const parsedMatches = matches.split("\n").map((row: string): string[] => {
  return row.split(",");
});

// TODO: Add data analysis for parsedMatches. Will have to convert string data into a Number to do the calculations

console.log(parsedMatches);
