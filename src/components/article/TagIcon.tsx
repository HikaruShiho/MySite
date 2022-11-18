import React from "react";

type Props = {
  tag: string;
};

const TagIcon = ({ tag }: Props) => {
  return (
    <div className="text-xs px-2 py-1 m-1 bg-qiita text-white rounded">{tag}</div>
  );
};

export default TagIcon;
