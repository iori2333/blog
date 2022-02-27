export interface Author {
  id: string;
  name: string;
}

export interface AuthorDetail extends Author {
  lastLogin: number;
  createdAt: number;
}
