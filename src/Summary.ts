import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}
