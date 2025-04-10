import { LS_NAME, TBookmark } from "utils/types";

const useLocalStorage = () => {
  const saveLS = (key: LS_NAME, value: string) => {
    localStorage.setItem(key, value);
  };

  const getValueFromLS = async (key: LS_NAME) => {
    const originValue = await localStorage.getItem(key);
    const value =
      originValue && typeof originValue === "string"
        ? JSON.parse(originValue)
        : [];

    return value;
  };

  const getBookmarkInfo = async (color: string) => {
    const bookmarkList = await getValueFromLS(LS_NAME.BOOKMARK_LIST),
      bookmark = bookmarkList.filter((mark: TBookmark) => mark.color === color);

    return bookmark ? bookmark[0] : null;
  };

  const updateBookmarkInfo = async (
    color: string,
    updatedBookmark: TBookmark
  ) => {
    const bookmarkList = await getValueFromLS(LS_NAME.BOOKMARK_LIST);
    const updatedList = bookmarkList.map((bookmark: TBookmark) =>
      bookmark.color === color ? updatedBookmark : bookmark
    );

    saveLS(LS_NAME.BOOKMARK_LIST, JSON.stringify(updatedList));
  };

  return { saveLS, getValueFromLS, getBookmarkInfo, updateBookmarkInfo };
};

export default useLocalStorage;
