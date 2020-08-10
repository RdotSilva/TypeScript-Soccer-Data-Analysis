import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult";
import { CsvFileReader } from "./CsvFileReader";

// Create an object that satisfies that 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something statisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let manUnitedWins = 0;

// Loop through parsed matches and find the times that Man United wins.
for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
