import { Analyzer } from "./../Summary";
import { MatchData } from "../MatchData";

export class GoalsScoredAnalysis implements Analyzer {
  constructor(public team: string) {}

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
