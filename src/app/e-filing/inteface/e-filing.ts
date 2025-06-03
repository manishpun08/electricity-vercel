export interface IEFilingRoot {
  status: string;
  status_code: number;
  message: string;
  data: IEFilingDaum[];
}

export interface IEFilingDaum {
  id: string;
  ordering: number;
  title: string;
  description: string;
  filing_type: string;
  document: string;
  image: string;
  submission_date: string;
  is_approved: boolean;
  remarks: string;
}
