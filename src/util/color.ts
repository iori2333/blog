const colorReg = /^#([0-9a-fA-F]{3,6})$/;

export const textColor = (color: string) => {
  if (!colorReg.test(color)) {
    return '#000';
  }
  color = color.substring(1);
  const [r, g, b] = [
    parseInt(color.substring(0, 2), 16),
    parseInt(color.substring(2, 4), 16),
    parseInt(color.substring(4, 6), 16)
  ];
  const thre = 0.213 * r + 0.715 * g + 0.072 * b;
  return thre > 255 / 2 ? '#000' : '#fff';
};
