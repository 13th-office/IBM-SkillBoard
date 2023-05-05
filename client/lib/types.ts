export interface Credentials {
  email: string;
  password: string;
}

export interface Certificate {
  id: string;
  name: string;
  type: string;
  expiration_date: string;
}
export interface Category {
  id: string;
  name: string;
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
  name: string;
}

export interface TeamWithManager {
  team: Team;
  manager: User;
}

export interface TeamWithEmployeesManager {
  team: Team;
  employees: User[];
  manager: User;
}
