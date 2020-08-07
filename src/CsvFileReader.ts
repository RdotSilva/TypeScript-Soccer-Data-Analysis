import fs from "fs";}
import { MatchResult } from "./MatchResult";

// Tuple used to describe how the match data should be mapped
type MatchData = [Date, string, string, number, number, MatchResult, string];

/**
 * Class used to read a CSV file
 * @export
 * @class CsvFileReader
 */
export abstract class CsvFileReader {
  data: MatchData[] = [];

  /**
   * Creates an instance of CsvFileReader.
   * @param {string} filename - The name of the file to read
   * @memberof CsvFileReader
   */
  constructor(public filename: string) {}

  abstract mapRow(row: string[]): MatchData;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      }).map(this.mapRow);
  }
}
