import Header from "components/BookmarkEdit/Header";
import React, { useState, useEffect } from "react";
import sEditIcon from "images/s-editIcon.svg";
import Tag from "components/BookmarkEdit/Tag";
import StarIcon from "components/Common/Icon/StarIcon";
import { createFileRoute } from "@tanstack/react-router";
import useLocalStorage from "hooks/useLocalStorage";
import { TBookmark, TStop } from "utils/types";
import DeleteIcon from "images/trashCan.svg";
import StopItemList from "components/BookmarkEdit/StopItemList";
import { stopTemp } from "components/Search/ResultList";

const StopEdit = () => {
  const { bId } = Route.useLoaderData();
  const { getBookmarkInfo, updateBookmarkInfo } = useLocalStorage();
  const [bookmark, setBookmark] = useState<TBookmark | null>(null);

  useEffect(() => {
    const fetchBookmark = async () => {
      const bookmarkInfo = await getBookmarkInfo(`#${bId}`);
      if (!bookmarkInfo) return setBookmark(null);
      setBookmark({
        color: bookmarkInfo.color,
        name: bookmarkInfo.name,
        stops: bookmarkInfo.stops || stopTemp,
      });
    };

    if (!bookmark) fetchBookmark();
  }, [bId, bookmark, getBookmarkInfo]);

  const handleReorder = async (newStops: TStop[]) => {
    if (!bookmark) return;

    const newBookmark = {
      ...bookmark,
      stops: newStops,
    };

    setBookmark(newBookmark);
    await updateBookmarkInfo(`#${bId}`, newBookmark);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header
        title={
          <>
            정류장을 자유롭게
            <br />
            관리해보세요
          </>
        }
        bIcon={sEditIcon}
      />

      {bookmark ? (
        <section className="flex-1 py-5 px-6  overflow-y-scroll max-h-[calc(100vh-218px)]">
          <div className="relative">
            <Tag
              content={
                <div className="flex gap-2.25 items-center">
                  <StarIcon color={bookmark?.color} />
                  {bookmark.name && (
                    <span className="text-black font-semibold">
                      {bookmark.name}
                    </span>
                  )}
                </div>
              }
            />
            <button className="absolute right-0 top-[15%]">
              <img
                src={DeleteIcon}
                alt={"delete button"}
                width={26}
                height={26}
              />
            </button>
          </div>

          <StopItemList
            list={bookmark.stops || stopTemp}
            onReorder={handleReorder}
          />
        </section>
      ) : (
        <div>정보가 없습니다.</div>
      )}
    </div>
  );
};

export default StopEdit;

export const Route = createFileRoute("/bEdit/$bId/sEdit")({
  component: StopEdit,
  loader: ({ params: { bId } }) => ({ bId }),
});
