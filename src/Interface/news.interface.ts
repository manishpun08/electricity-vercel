export interface INewsRoot {
  links: INewsLinks;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: INewsResult[];
}

export interface INewsLinks {
  next: string;
  previous: string;
}

export interface INewsResult {
  id: string;
  created_at: string;
  updated_at: string;
  main_category: string;
  sub_category: string;
  title_en: string;
  description: string;
  slug: string;
  file: string;
  image: string;
}
