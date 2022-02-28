import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import { article } from './modules/article';

import { FullState } from './store';

export const key: InjectionKey<Store<FullState>> = Symbol();

export const store = createStore({
  modules: {
    article
  }
});

export const useStore = () => baseUseStore(key);
