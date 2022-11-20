import React from "react";

type Props = {
  tag: string;
};

const TagIcon = ({ tag }: Props) => {
  return (
    <div className="text-2xs md:text-xs px-1 md:px-2 py-0 md:py-1 m-1 bg-qiita text-white rounded">
      {tag}
    </div>
  );
};

export default TagIcon;
