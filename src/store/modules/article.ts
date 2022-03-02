import { Module } from 'vuex';
import { RootState } from '../store';

import { fetchArticles } from '../../api/article';
import { useToast } from '../../hooks';
import { ArticlePreview } from '../../models/article';
import { Tag } from '../../models/tag';

export interface ArticleState {
  articles: ArticlePreview[];
  tags: Record<string, Tag>;
}

export const article: Module<ArticleState, RootState> = {
  state: {
    articles: [] as ArticlePreview[],
    tags: {} as Record<string, Tag>
  },
  mutations: {
    APPEND(state, ...article: ArticlePreview[]) {
      state.articles.push(...article);
    },
    SET(state, articles: ArticlePreview[]) {
      state.articles = articles;
    }
  },
  actions: {
    fetchArticles({ commit }) {
      const toast = useToast();
      fetchArticles()
        .then(articles => commit('SET', articles))
        .catch(err => toast.error(err.message));
    },
    appendArticles({ commit }, page: number) {
      const toast = useToast();
      fetchArticles(page)
        .then(articles => commit('APPEND', ...articles))
        .catch(err => toast.error(err.message));
    }
  }
};
