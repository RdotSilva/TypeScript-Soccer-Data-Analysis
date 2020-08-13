import { Analyzer } from "./../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

/**
 * Class that analyzes data to return the winner of a match on a specific date
 * @export
 * @class WinnerByDateAnalysis
 * @implements {Analyzer}
 */
export class WinnerByDateAnalysis implements Analyzer {
  constructor(public date: Date) {}

  /**
   * Analyzes the data to get the winner of a match on specific date
   * @param {MatchData[]} matches - The match data to analyze
   * @returns {string}
   * @memberof WinnerByDateAnalysis
   */
  run(matches: MatchData[]): string {
    let matchWinner;

    for (let match of matches) {
      if (match[0] === this.date) {
        if (match[5] === MatchResult.HomeWin) {
          matchWinner = match[1];
        } else if (match[5] === MatchResult.AwayWin) {
          matchWinner = match[2];
        } else {
          matchWinner = "DRAW";
        }
      }
    }
    return `The winner of the match on ${this.date} was ${matchWinner}`;
  }
}
