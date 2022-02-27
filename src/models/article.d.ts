export interface Article {
  id: string;
  title: string;
  author: string;
  timestamp: number;
  tags?: string[];
  img?: string;
  content: string;
}
