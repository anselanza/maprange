// Based on https://easings.net/

export const linear = (x: number): number => x;

export const expoIn = (x: number): number =>
  x === 0 ? 0 : Math.pow(2, 10 * x - 10);

export const expoOut = (x: number): number =>
  x === 1 ? 1 : 1 - Math.pow(2, -10 * x);

export const expoInOut = (x: number): number =>
  x === 0
    ? 0
    : x === 1
    ? 1
    : x < 0.5
    ? Math.pow(2, 20 * x - 10) / 2
    : (2 - Math.pow(2, -20 * x + 10)) / 2;

export const quadIn = (x: number): number => x * x;

export const quadOut = (x: number): number => 1 - (1 - x) * (1 - x);

export const quadInOut = (x: number): number =>
  x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
