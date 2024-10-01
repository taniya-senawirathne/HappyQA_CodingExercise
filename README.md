# HappyQA_CodingExercise

# Problem 1: Happy QA Coding assignment - TypeScript Project

This project to , select the maximum number of releases possible within a 10-day sprint. The project reads release data from a .txt file, processes it to maximize the number of releases, and writes the result to an output .txt file.

## Project Structure

```bash

HappyQA_CodingExercise/
│
├── src/
│   ├── models/
│   │   └── Release.ts         # Model representing a release with delivery day and duration
│   ├── utils/
│   │   └── FileHandler.ts      # Utility for reading from and writing to .txt files
│   ├── services/
│   │   └── ReleaseSelector.ts  # Service for selecting the maximum number of releases
│   └── index.ts                # Main entry point for the program
├── releases.txt                # Input file containing release data (format: <delivery day> <duration>)
├── solution.txt                # Output file containing the solution with the max number of releases
├── tsconfig.json               # TypeScript configuration file
├── package.json                # Node.js project configuration and dependencies
└── README.md                   # Project documentation (this file)
```
## How to Run the Project
1. Prerequisites
 - Node.js installed on your system.

2. Setup the Project
Clone the repository or create a new directory and follow the instructions below:
```bash
git clone <https://github.com/taniya-senawirathne/HappyQA_CodingExercise.git>
cd HappyQA_CodingExercise
```
3. Install Dependencies: Install all required dependencies (TypeScript and Node types):
```bash
npm install
```

4. Configure TypeScript: If not already done, initialize the TypeScript project:
```bash
npx tsc --init
```
4. Input and Output File Format
Input File (releases.txt): The input file contains multiple lines, each with two integers separated by a space. The first integer is the delivery day (1-10), and the second integer is the number of days required to validate the release.

Example of releases.txt:

1 1
2 1
3 1
9 1
10 4
10 2
9 5
10 3
4 5

Output File (solution.txt): The output file will contain the maximum number of releases that can be validated within the sprint. The first line is the number of releases, and the subsequent lines represent the start and end day of each release.

Example of solution.txt:
5
1 1
2 2
3 3
4 8
9 9

## Running the Project - Using NPM Script
Compile the TypeScript files: Run the TypeScript compiler to transpile the TypeScript files to JavaScript:
```bash
npx tsc
```
Run the Program: After compilation, execute the program using Node.js:
```bash
npm run strat
```
Check the Output: The solution will be written to the solution.txt file in the root of the project directory.

