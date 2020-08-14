import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { GoalsScoredAnalysis } from "./analyzers/GoalsScoredAnalysis";
import { WinnerByDateAnalysis } from "./analyzers/WinnerByDateAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";

// Create an object that satisfies that 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv");

// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// The match data
const matches = matchReader.matches;

// Create a summary for Man United wins
const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReport());

summary.buildAndPrintReport(matches);

// Create a summary for Man United Goals
const goalsScoredSummary = new Summary(
  new GoalsScoredAnalysis("Man United"),
  new ConsoleReport()
);

goalsScoredSummary.buildAndPrintReport(matches);

// Create a summary for Winner by date
const winnerByDateSummary = new Summary(
  new WinnerByDateAnalysis(new Date(2018, 1, 9)),
  new ConsoleReport()
);

winnerByDateSummary.buildAndPrintReport(matches);
