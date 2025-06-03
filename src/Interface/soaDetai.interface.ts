export interface ISoaDetailRoot {
  links: ISoaDetailLinks;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: ISoaDetailResult[];
}

export interface ISoaDetailLinks {
  next: string;
  previous: string;
}

export interface ISoaDetailResult {
  id: string;
  slug: string;
  title: string;
  description: string;
  details: ISoaDetailDetail[];
}

export interface ISoaDetailDetail {
  id: string;
  created_at?: string;
  updated_at?: string;
  company_name?: string;
  address?: string;
  conduct_of_application?: string;
  date_of_application?: string;
  date_of_commision_decision?: string;
  status?: string;
  remarks?: string;
  application_status?: string;
}
