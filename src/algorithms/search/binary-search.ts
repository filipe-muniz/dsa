export type Type = number | string
export const binarySearch = (xs: Type[], target: Type): number | null => {
  const search = (start: number, end: number): number | null => {
    const mid = Math.floor((start + end) / 2);

    if (end < start) return null;
    if (xs[mid] === target) return mid;
    else if (target > xs[mid]) return search(mid + 1, end);
    else return search(start, mid - 1);
  };
  return search(0, xs.length - 1);
};

export const binarySearchIterative = (xs: Type[], target: Type): number | null => {
  let start = 0;
  let end = xs.length - 1;
  let mid;
  while (end >= start) {
    mid = Math.floor((start + end) / 2);
    if (xs[mid] === target) return mid;
    else if (target > xs[mid]) start = mid + 1;
    else end = mid - 1;
  }
  return null;
};
