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

  /**
   * Maps a row of data into a MatchData type
   * @abstract
   * @param {string[]} row - The row of data to map
   * @returns {MatchData}
   * @memberof CsvFileReader
   */
  abstract mapRow(row: string[]): MatchData;

  /**
   * Reads the data line by line from a CSV file and maps it 
   * @memberof CsvFileReader
   */
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
