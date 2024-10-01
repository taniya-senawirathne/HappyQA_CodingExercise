import { FileHandler } from './utils/FileHandler';
import { ReleaseSelector } from './services/ReleaseSelector';

// File paths for input and output
const inputFilePath = 'releases.txt';
const outputFilePath = 'solution.txt';

// Read the release data from the input file
const releases = FileHandler.readReleases(inputFilePath);

// Initialize the release selector and compute the maximum number of releases
const releaseSelector = new ReleaseSelector(releases);
const selectedReleases = releaseSelector.selectMaxReleases();

// Write the solution (max number of releases and their details) to the output file
FileHandler.writeSolution(outputFilePath, selectedReleases);
