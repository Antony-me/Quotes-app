export class Quote {
    public showDescription: boolean;
    constructor(
      public id: number,
      public description: string,
      public title: string,
      public name: string,
      public upVote: number,
      public downVote: number,
      public publishDate: Date,) {
      this.showDescription = false
    }
  }
