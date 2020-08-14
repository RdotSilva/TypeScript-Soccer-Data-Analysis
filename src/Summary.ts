import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(
    teamName: string,
    reportPath: string
  ): Summary {
    return new Summary(new WinsAnalysis(teamName), new HtmlReport(reportPath));
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  /**
   * Builds the output data using the analyzer and then prints the output
   * @param {MatchData[]} matches - The match data to analyze
   * @memberof Summary
   */
  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
