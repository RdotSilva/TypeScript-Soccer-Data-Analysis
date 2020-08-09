import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";

const MatchData = [Date, string, string, number, number, MatchResult, string];
interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  constructor(public reader: DataReader) {}
}
