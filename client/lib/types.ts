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
  last_name: string;
  email: string;
  role: string;
}
