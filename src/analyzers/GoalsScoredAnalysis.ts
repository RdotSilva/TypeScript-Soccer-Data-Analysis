import { Analyzer } from "./../Summary";
import { MatchData } from "../MatchData";

/**
 * Class that will analyze team data and calculate the total number of goals scored
 * @export
 * @class GoalsScoredAnalysis
 * @implements {Analyzer}
 */
export class GoalsScoredAnalysis implements Analyzer {
  /**
   * Creates an instance of GoalsScoredAnalysis.
   * @param {string} team - The team to analyze
   * @memberof GoalsScoredAnalysis
   */
  constructor(public team: string) {}

  /**
   * Calculates the total number of goals a particular team has scored over the entire season
   * @param {MatchData[]} matches - The match data to analyze
   * @returns {string}
   * @memberof GoalsScoredAnalysis
   */
  run(matches: MatchData[]): string {
    let totalGoalsScored = 0;

    for (let match of matches) {
      if (match[1] === this.team) {
        totalGoalsScored += match[3];
      } else if (match[2] === this.team) {
        totalGoalsScored += match[4];
      }
    }

    return `Team ${this.team} scored a total of ${totalGoalsScored} goals this entire season`;
  }
}
