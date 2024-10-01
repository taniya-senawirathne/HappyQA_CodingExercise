import { readFileSync, writeFileSync } from 'fs';

// Utility class for reading and writing release data to/from files
export class FileHandler {
  
  // Reads release data from a file and converts it into an array of tuples
  static readReleases(filePath: string): [number, number][] {
    const data = readFileSync(filePath, 'utf-8');
    return data.trim().split('\n').map(line => {
      const [day, duration] = line.split(' ').map(Number);
      return [day, duration]; // Return as tuple [deliveryDay, duration]
    });
  }

  // Writes the solution to a file, including the maximum number of releases and their details
  static writeSolution(filePath: string, solution: [number, number][]): void {
    const data = [solution.length, ...solution.map(r => `${r[0]} ${r[1]}`)].join('\n');
    writeFileSync(filePath, data);
  }
}
