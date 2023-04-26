export interface Credentials {
  email: string;
  password: string;
}

export interface Certificate {
  id: string;
  name: string;
  type: string;
  categories: Category[];
  expiration_date: string;
}
export interface Category {
  id: string;
  name: string;
}
export interface Certificates {
  certificates: Certificate[];
}
export interface User {
  id: string;
  name: string;
  last_name: string;
  email: string;
  role: string;
}

export interface Team {
  id: string;
  team_name: string;
}

export interface TeamWithEmployeesManager {
  team: Team;
  employees: User[];
  manager: User;
}
