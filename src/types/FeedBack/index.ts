export interface FeedBackMutaion {
    name: string;
    subject: string;
    description: string;
  }


  export interface FeedBack {
      id: number;
      name: string;
      subject: string;
      description: string;
      userId: null | string | number
  }