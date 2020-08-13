import { Analyzer } from "./../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinnerByDateAnalysis implements Analyzer {
  constructor(public date: Date) {}

  run(matches: MatchData[]): string {
    for (let match of matches) {
      let matchWinner;

      if (match[0] === this.date) {
        if (match[5] === MatchResult.HomeWin) {
          matchWinner = match[1];
        } else if (match[5] === MatchResult.AwayWin) {
          matchWinner = match[2];
        } else {
          matchWinner = "DRAW";
        }
      }

      return `The winner of the match on ${this.date} was ${matchWinner}`;
    }
  }
}
