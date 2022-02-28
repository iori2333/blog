import { createVNode, render } from 'vue';
import ToastMessage from '../common/ToastMessage.vue';

const toast = (
  message: string,
  timeout?: number,
  level?: 'error' | 'warning' | 'info'
) => {
  timeout = timeout ?? 3000;
  level = level ?? 'info';

  const vm = createVNode(ToastMessage, { message, level });
  const container = document.createElement('div');

  render(vm, container);

  const dom = vm.el as HTMLDivElement;
  document.body.appendChild(container);

  setTimeout(() => dom.classList.add('visible'), 0);
  const tm1 = setTimeout(() => {
    dom.classList.remove('visible');
    const tm2 = setTimeout(() => {
      render(null, container);
      document.body.removeChild(container);
      clearTimeout(tm2);
    }, 400);
    clearTimeout(tm1);
  }, timeout);
};

export default () => ({
  warn: (message: string, timeout?: number) =>
    toast(message, timeout, 'warning'),
  info: (message: string, timeout?: number) => toast(message, timeout, 'info'),
  error: (message: string, timeout?: number) => toast(message, timeout, 'error')
});
