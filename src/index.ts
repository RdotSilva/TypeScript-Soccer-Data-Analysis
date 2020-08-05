import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");

// Match outcome results
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

// Loop through parsed matches and find the times that Man United wins.
for (let match of parsedMatches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
