const colorReg = /^#([0-9a-fA-F]{3,6})$/;

export const textColor = (color: string) => {
  if (!colorReg.test(color)) {
    return '#000';
  }
  let [r, g, b] = [0, 0, 0];
  if (color.length === 7) {
    [r, g, b] = [
      parseInt(color.substring(1, 3), 16),
      parseInt(color.substring(3, 5), 16),
      parseInt(color.substring(5, 7), 16)
    ];
  } else {
    [r, g, b] = [
      parseInt(color[1] + color[1], 16),
      parseInt(color[2] + color[2], 16),
      parseInt(color[3] + color[3], 16)
    ];
  }
  const thre = 0.213 * r + 0.715 * g + 0.072 * b;
  return thre > 255 / 2 ? '#000' : '#fff';
};
