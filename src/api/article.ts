import { Article } from '../models/article';
import { Tag } from '../models/tag';
import { get } from '../util/network';

export const fetchArticles = async (page = 0) => {
  const r = await get<Article[]>('/api/articles', { page });
  return r.data.sort((a, b) => {
    return a.pinned == b.pinned ? b.timestamp - a.timestamp : b.pinned ? 1 : -1;
  });
};

export const fetchTags = async () => {
  const r = await get<Tag[]>('/api/tags');
  return r.data.sort((a, b) => b.count - a.count);
};

export const searchArticles = async (keyword: string, page = 0) => {
  const r = await get<Article[]>('/api/search', { keyword, page });
  return r.data.sort((a, b) => b.timestamp - a.timestamp);
};
