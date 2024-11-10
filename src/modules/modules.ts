import { IEasyPost, IPost } from "../interfaces/interfaces";

export const POST_PER_PAGE = 10;

export const getTotalPageCount = (postCount: number): number =>
  Math.ceil(postCount / POST_PER_PAGE);

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

export function getQuery(obj:IPost|any):IEasyPost{
  let filtered = Object.keys(obj).filter((k) => ~["author", "source", "urlToImage", "title", "description"].indexOf(k));
  let query:any = {};
  filtered.forEach((k) => query[k] = obj[k]);
  return query
}