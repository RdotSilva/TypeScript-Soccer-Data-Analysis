import { Analyzer } from "./../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinnerByDateAnalysis implements Analyzer {
  constructor(public date: Date) {}

  run(matches: MatchData[]): string {
    // TODO: Write implementation to search matches for a particular date
    // TODO: Find out who won the match "H" or "A"
    // TODO: Get the appropriate match[] based on H or A match[1] for H match[2] for A
  }
}
