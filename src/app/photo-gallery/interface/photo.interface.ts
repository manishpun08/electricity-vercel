export interface IPhotoRoot {
  links: IPhotoLinks;
  total_items: number;
  total_pages: number;
  current_page: number;
  page_size: number;
  results: IPhotoResult[];
}

export interface IPhotoLinks {
  next: string;
  previous: string;
}

export interface IPhotoResult {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  thumbnail: string;
  images: IPhotoImage[];
}

export interface IPhotoImage {
  id: string;
  created_at: string;
  updated_at: string;
  image: string;
}
