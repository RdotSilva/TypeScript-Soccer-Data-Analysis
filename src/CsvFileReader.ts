import fs from "fs";

/**
 * A class that is used to read a CSV file
 * @export
 * @class CsvFileReader
 */
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  /**
   * Read the data by splitting at a each new line
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
      });
  }
}
