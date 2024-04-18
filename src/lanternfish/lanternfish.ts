const initialState = [3, 4, 3, 1, 2];

const calculate = (init: number[], days: number) => {
  let state: number[] = init;
  for (let i = 0; i < days; i++) {
    const newState: number[] = [];
    state.forEach((i) => {
      const shouldReset = i - 1 < 0;
      if (shouldReset) {
        newState.push(8);
      }
      newState.push(!shouldReset ? i - 1 : 6);
    });
    state = newState;
  }
  return state.length;
};

console.log(calculate(initialState, 80));
