import { Article } from '../models/article';
// import { get } from '../util/network';

export const fetchArticles = async () => {
  const article: Article = {
    id: '1',
    title: '博客激情编写中',
    timestamp: new Date().getTime(),
    content: `哼哼哼，啊啊啊啊啊啊啊啊啊啊啊啊`,
    author: 'Iori'
  };

  const pinnedArticle: Article = {
    id: '2',
    title: 'pin 博客激情编写中',
    timestamp: new Date(2010, 3, 10, 12, 30).getTime(),
    content: `哼哼哼，啊啊啊啊啊啊啊啊啊啊啊啊`,
    author: 'Iori',
    pinned: true
  };
  // const r = await get('/api/articles');
  // return r.data as Article[];
  const articles = [
    pinnedArticle,
    article,
    article,
    article,
    article,
    article,
    article,
    article,
    article
  ];
  articles.sort((a, b) => {
    return a.pinned == b.pinned ? a.timestamp - b.timestamp : b.pinned ? 1 : -1;
  });
  return articles;
};
