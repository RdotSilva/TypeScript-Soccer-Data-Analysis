import fs from "fs";}
import { dateStringToDate } from './utils';
import { MatchResult } from "./MatchResult";

/**
 * Class used to read a CSV file
 * @export
 * @class CsvFileReader
 */
export class CsvFileReader {
  data: string[][] = [];

  /**
   * Creates an instance of CsvFileReader.
   * @param {string} filename - The name of the file to read
   * @memberof CsvFileReader
   */
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      }).map((row: string[]): any  => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ]
      })
  }
}
