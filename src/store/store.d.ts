import { ArticleState } from './modules/article';

export type RootState = Record<string, unknown>;

export interface FullState extends RootState {
  article: ArticleState;
}
