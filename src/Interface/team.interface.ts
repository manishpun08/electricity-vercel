export interface IHomeTeamRoot {
  status: string;
  status_code: number;
  message: string;
  data: IHomeTeamDaum[];
}

export interface IHomeTeamDaum {
  id: string;
  ordering: number;
  name: string;
  designation: string;
  image: string;
  message: string;
  email: string;
}
