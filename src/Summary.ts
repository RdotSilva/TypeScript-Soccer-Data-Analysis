import { MatchData } from "./MatchData";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {
    // TODO: Implement the buildAndPrintReport method
    // TODO: It should take in matches and return nothing (void)
  }
}
