export interface ArticlePreview {
  id: string;
  title: string;
  author: string;
  timestamp: number;
  tags?: string[];
  img?: string;
  pinned?: boolean;
  preview: string;
}

export interface Article extends ArticlePreview {
  content: string;
}
