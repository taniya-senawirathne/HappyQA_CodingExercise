import { Release } from '../models/Release';

// Service class responsible for selecting the maximum number of releases
export class ReleaseSelector {
  private releases: Release[];

  // Constructor initializes the list of releases from input data
  constructor(releases: [number, number][]) {
    this.releases = releases.map(([day, duration]) => new Release(day, duration));
  }

  // Logic to select the maximum number of releases that can fit within the sprint
  public selectMaxReleases(): [number, number][] {
    // Sort releases by their end day to optimize for early completion
    this.releases.sort((a, b) => a.getEndDay() - b.getEndDay());
    
    const selectedReleases: [number, number][] = [];
    let lastEndDay = 0;

    // Loop through each release and check if it can be validated within the sprint
    for (const release of this.releases) {
      const startDay = release.deliveryDay;
      const endDay = release.getEndDay();

      // Add the release if its start day is after the last release’s end day and it fits within the sprint
      if (startDay > lastEndDay && endDay <= 10) {
        selectedReleases.push([startDay, endDay]);
        lastEndDay = endDay; // Update the last end day
      }
    }

    return selectedReleases;
  }
}
