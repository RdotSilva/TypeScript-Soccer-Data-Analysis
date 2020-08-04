import fs from "fs";

// Read the entire contents of the CSV file
const matches = fs.readFileSync("football.csv", {
  encoding: "utf-8",
});

// Parse the matches into a multi-dimensional array
const parsedMatches = matches.split("\n").map((row: string): string[] => {
  return row.split(",");
});

let manUnitedWins = 0;

// Loop through parsed matches and find the times that Man United wins.
for (let match of parsedMatches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
