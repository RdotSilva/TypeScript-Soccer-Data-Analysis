import { Analyzer } from "./../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";
export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
}
