import { Module } from 'vuex';
import { RootState } from '../store';

import { fetchArticles } from '../../api/article';
import { useToast } from '../../hooks';
import { Article } from '../../models/article';

export interface ArticleState {
  articles: Article[];
}

export const article: Module<ArticleState, RootState> = {
  state: {
    articles: [] as Article[]
  },
  mutations: {
    APPEND(state, ...article: Article[]) {
      state.articles.push(...article);
    },
    SET(state, articles: Article[]) {
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
