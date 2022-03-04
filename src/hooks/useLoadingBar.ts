import { createVNode, VNode, render } from 'vue';

import LoadingBarVue from '../components/common/LoadingBar.vue';

class LoadingBar {
  private node: VNode;
  private container: HTMLDivElement;

  constructor() {
    this.node = createVNode(LoadingBarVue, {});
    this.container = document.createElement('div');
  }

  start() {
    render(this.node, this.container);
    document.body.appendChild(this.container);
  }

  end() {
    const dom = this.node.el as HTMLDivElement;
    const container = this.container; // in case for multiple loading bars
    const tm1 = setTimeout(() => {
      dom.classList.add('hidden');
      const tm2 = setTimeout(() => {
        render(null, container);
        document.body.removeChild(container);
        clearTimeout(tm2);
      }, 250);
      clearInterval(tm1);
    }, 400);

    dom.classList.add('done');
  }
}

export default () => new LoadingBar();
