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
export interface User {
  name: string;
  lastName: string;
  email: string;
  rol: string;
}

export interface UserInfo {
  name: string;
  last_name: string;
  role: string;
  manager: string;
  email: string;
}
