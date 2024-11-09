export function getFirstLetter(str: string): string {
  if (str && str.length >= 1) {
    return str.slice(0, 1);
  } else {
    return 'NaN';
  }
}

export function updateStringByNum(str: string, num: number): string {
  const strNum = str.length;

  if (strNum >= num) {
    return str.slice(0, num - 3) + '...';
  } else {
    return str;
  }
}
