import { Author } from './author';

export interface Article {
  title: string;
  author: Author;
  timestamp: number;
  tags?: string[];
  img?: string;
  content: string;
}
