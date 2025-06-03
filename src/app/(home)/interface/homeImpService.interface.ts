export interface IImpServiceRoot {
  status: string;
  status_code: number;
  message: string;
  data: IImpServiceDaum[];
}

export interface IImpServiceDaum {
  id: string;
  name: string;
  icon: string;
  ordering: number;
  title: string;
  description: string;
  images: IImpServiceImage[];
  files: IImpServiceFile[];
}

export interface IImpServiceImage {
  id: string;
  image?: string;
}

export interface IImpServiceFile {
  id: string;
  file: string;
}
