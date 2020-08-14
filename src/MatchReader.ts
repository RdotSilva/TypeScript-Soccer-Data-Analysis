import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
import { MatchData } from "./MatchData";
import { CsvFileReader } from "./CsvFileReader";
interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  static fromCsv(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  matches: MatchData[] = [];

  /**
   *Creates an instance of MatchReader.
   * @param {DataReader} reader - The reader to use
   * @memberof MatchReader
   */
  constructor(public reader: DataReader) {}

  /**
   * Convert each row into readable MatchData
   * @memberof MatchReader
   */
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6],
        ];
      }
    );
  }
}
