export const BASIC_CATE_COLOR = [
  "#FE5922",
  "#FF9874",
  "#FAE26C",
  "#19CEA4",
  "#03D9E4",
  "#4F95FF",
  "#6571FB",
  "#A771F8",
  "#FF99D9",
  "#C56021",
];

export enum LS_NAME {
  BOOKMARK_LIST = "BOOKMARK_LIST",
  RECENT_SEARCH_LIST = "RECENT_SEARCH_LIST",
}

export interface TStop {
  title: string;
  number: string;
  description?: string;
}
export interface TBookmark {
  color: string;
  name: string;
  stops?: TStop[];
}
