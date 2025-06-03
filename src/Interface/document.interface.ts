export interface IDocumentRoot {
  links: IDocumentLinks;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: IDocumentResult[];
}

export interface IDocumentLinks {
  next: string;
  previous: string;
}

export interface IDocumentResult {
  id: string;
  name: string;
  sub_ctg_slug: string;
  ordering: number;
  document_list: IDocumentDocumentList[];
}

export interface IDocumentDocumentList {
  id: string;
  title: string;
  description: string;
  file: string;
  image: string;
  slug: string;
  created_at: string;
}
