/*Represents a release with delivery day and duration  */

export class Release {
    constructor(public deliveryDay: number, public duration: number) {}
  
    // Calculates the last day of release validation based on delivery day and duration
    public getEndDay(): number {
      return this.deliveryDay + this.duration - 1;
    }
  }
  