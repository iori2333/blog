import { ArticlePreview } from '../models/article';
import { Tag } from '../models/tag';
import { get } from '../util/network';

const page_size = 10;

export const fetchArticles = async (page = 0) => {
  const r = await get<ArticlePreview[]>('/articles/index.json');
  return r.data
    .sort((a, b) => {
      return a.pinned == b.pinned
        ? b.timestamp - a.timestamp
        : b.pinned
        ? 1
        : -1;
    })
    .slice(page * page_size, (page + 1) * page_size);
};

export const fetchTags = async () => {
  const r = await get<Record<string, string[]>>('/tags/index.json');
  const tags: Tag[] = [];
  for (const [name, entries] of Object.entries(r.data)) {
    tags.push({ name, count: entries.length });
  }
  return tags.sort((a, b) => b.count - a.count);
};

export const searchArticles = async (keyword: string, page = 0) => {
  const r = await get<ArticlePreview[]>('/articles/index.json');
  const candidates = r.data
    .filter(a => a.title.includes(keyword) || a.author.includes(keyword))
    .slice(page * page_size, (page + 1) * page_size);
  return candidates.sort((a, b) => b.timestamp - a.timestamp);
};

export const fetchArticle = async (id: string) => {
  const index = await get<ArticlePreview[]>('/articles/index.json');
  const article = index.data.find(a => a.id == id);
  if (!article) {
    throw new Error('Article not found');
  }
  const r = await get<string>(`/articles/${id}.md`);
  return { ...article, content: r.data };
};
