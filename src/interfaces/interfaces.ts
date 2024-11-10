export interface IData {
  totalResults: number;
  status: string;
  articles: IArticle[];
}

export interface IArticle {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  url: string;
  urlToImage: string;
}

export interface IPost extends IArticle {
  id: number;
  like: boolean;
}
export interface IEasyPost {
  author:string;
  source:ISource;
  description: string;
  urlToImage: string;
  title: string;

}
export interface ISource {
  id: string | null;
  name: string;

}
