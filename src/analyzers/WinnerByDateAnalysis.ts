import { Analyzer } from "./../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class WinnerByDateAnalysis implements Analyzer {
  constructor(public date: Date) {}
}
