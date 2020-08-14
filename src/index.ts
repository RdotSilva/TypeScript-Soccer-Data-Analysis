import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { GoalsScoredAnalysis } from "./analyzers/GoalsScoredAnalysis";
import { WinnerByDateAnalysis } from "./analyzers/WinnerByDateAnalysis";

// Create MatchReader using static method.
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// The match data
const matches = matchReader.matches;

// Create a summary for Man United wins. This example uses a static method.
const manUnitedWinsAnalysisSummary = Summary.winsAnalysisWithHtmlReport(
  "Man United",
  "report.html"
);

manUnitedWinsAnalysisSummary.buildAndPrintReport(matches);

// Create a summary for Man United Goals
const goalsScoredSummary = Summary.goalsAnalysisWithHtmlReport(
  "Man United",
  "GoalsScoredReport.html"
);

goalsScoredSummary.buildAndPrintReport(matches);

// Create a summary for Winner by date
const winnerByDateSummary = new Summary(
  new WinnerByDateAnalysis(new Date(2018, 1, 9)),
  new ConsoleReport()
);

winnerByDateSummary.buildAndPrintReport(matches);
