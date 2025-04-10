import { createFileRoute } from "@tanstack/react-router";
import Header from "components/BookmarkEdit/Header";
import React from "react";
import bEditStarIcon from "images/b-editStar.svg";
import Tag from "components/BookmarkEdit/Tag";
import BookmarkList from "components/BookmarkEdit/BookmarkList";

const BookmarkEdit = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title={
          <>
            어떤 카테고리를
            <br />
            편집할까요?
          </>
        }
        bIcon={bEditStarIcon}
      />
      <section className="flex-1 py-5 px-6  overflow-y-scroll max-h-[calc(100vh-218px)]">
        <Tag
          content={
            <span className="text-tag font-semibold">카테고리 목록</span>
          }
        />
        <BookmarkList />
      </section>
    </div>
  );
};

export default BookmarkEdit;

export const Route = createFileRoute("/bEdit/")({
  component: BookmarkEdit,
});
