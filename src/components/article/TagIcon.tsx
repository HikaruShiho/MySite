import React from "react";

type Props = {
  tag: string;
};

const TagIcon = ({ tag }: Props) => {
  return (
    <div className="text-xs md:text-sm px-1 md:px-2 m-1 py-0.5 md:py-0 bg-qiita text-white rounded">
      {tag}
    </div>
  );
};

export default TagIcon;
