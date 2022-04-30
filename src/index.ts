export function sum(items: number[]) {
  return items.reduce((acc, curr) => (acc += curr));
}

export function average(items: number[]) {
  return sum(items) / items.length;
}

export function variance(items: number[], isPopulation: boolean = false) {
  const avg = average(items);
  const data = items.map((item) => Math.pow(item - avg, 2));
  return isPopulation ? average(data) : sum(data) / (items.length - 1);
}

export function standard(itmes: number[], isPopulation: boolean = false) {
  return Math.sqrt(variance(itmes, isPopulation));
}

export function median(items: number[]) {
  const sortedItems = sorted(items);
  const len = sortedItems.length;
  return len % 2 ? sortedItems[Math.floor(len / 2)] : (sortedItems[len / 2 - 1] + sortedItems[len / 2]) / 2;
}

export function sorted(items: number[]) {
  return items.map((item) => item).sort((a, b) => a - b);
}

export function percentile(percent: number) {
  let p = percent > 1 ? percent / 100 : percent;
  if (p > 1) {
    throw new Error(`percent must be 1 ~ 99 or 0.01 ~ 0.99`);
  }
  return (items: number[]) => {
    const sortedItems = sorted(items);
    if (p === 1) return sortedItems[sortedItems.length - 1];
    const expect = sortedItems.length * p;
    return Number.isInteger(expect) ? (sortedItems[expect - 1] + sortedItems[expect]) / 2 : sortedItems[Math.floor(expect + 1) - 1];
  };
}

export function iqr(items: number[]) {
  return percentile(75)(items) - percentile(25)(items);
}

type Quartiles = {
  q1: number;
  q2: number;
  q3: number;
  q4: number;
};

export function quartiles(items: number[]): Quartiles {
  return {
    q1: percentile(25)(items),
    q2: percentile(50)(items),
    q3: percentile(75)(items),
    q4: percentile(100)(items),
  };
}

export function cv(items: number[]) {
  return (standard(items) / average(items)) * 100;
}
