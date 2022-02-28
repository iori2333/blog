import { Module } from 'vuex';
import { fetchArticles } from '../../api/article';
import { Article } from '../../models/article';
import { RootState } from '../store';

export interface ArticleState {
  articles: Article[];
}

export const article: Module<ArticleState, RootState> = {
  state: {
    articles: [] as Article[]
  },
  mutations: {
    APPEND(state, article: Article) {
      state.articles.push(article);
    },
    SET(state, articles: Article[]) {
      state.articles = articles;
    }
  },
  actions: {
    fetchArticles({ commit }) {
      fetchArticles().then(articles => commit('SET', articles));
    }
  }
};
