export interface IFaqRoot {
  status: string;
  status_code: number;
  message: string;
  data: IFaqDaum[];
}

export interface IFaqDaum {
  id: string;
  created_at: string;
  updated_at: string;
  ordering: number;
  question: string;
  answer: string;
  category: string;
}
