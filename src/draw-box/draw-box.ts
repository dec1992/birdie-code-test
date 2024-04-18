export const drawBox = (x: number, y: number) => {
  const width = Array.from({ length: x }, (v, i) => i);
  const topAndBottom = `+${width.map((i) => "-").join("")}+`;
  const height = Array.from({ length: y }, (v, i) => i);
  const horizontals = height.map((i) => {
    return `|${width.map((i) => " ").join("")}|`;
  });

  return `
${topAndBottom}
${horizontals.join("\n")}
${topAndBottom}`;
};
