import { marked } from 'marked';

export interface ContentItem {
  anchor: string;
  level: number;
  text: string;
  children?: ContentItem[];
}

export const convertMd = (raw: string) => {
  const renderer = new marked.Renderer();
  const content = [] as ContentItem[];
  let count = 0;
  renderer.heading = (text, level) => {
    count++;
    content.push({ anchor: `_md${count}`, level, text });
    return `<h${level} id="_md${count}">${text}</h${level}>`;
  };
  marked.setOptions({ renderer });
  const rendered = marked(raw);
  return { content, rendered };
};
