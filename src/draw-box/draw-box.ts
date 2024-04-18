export const drawBox = (x: number, y: number) => {
  const result = [""];
  const totalHeight = y + 2;
  for (let i = 0; i < totalHeight; i++) {
    const isTopOrBottom = Boolean(!i || i === totalHeight - 1);
    result.push(drawLine(x, isTopOrBottom));
  }
  return result.join("\n");
};

const drawLine = (length: number, topOrBottom: boolean) => {
  const edge = topOrBottom ? "+" : "|";
  const space = topOrBottom ? "-" : " ";
  return `${edge}${Array.from({ length }, () => space).join("")}${edge}`;
};
