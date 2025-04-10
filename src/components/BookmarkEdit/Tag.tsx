import React from "react";

const Tag = ({ content }: { content: React.ReactElement }) => {
  return (
    <div className="text-center">
      <span className="inline-block rounded-2.5xl text-xs border-1 border border-tag py-1.75 px-3.75">
        {content}
      </span>
    </div>
  );
};

export default Tag;
