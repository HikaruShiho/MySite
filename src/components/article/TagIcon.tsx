import React from "react";

type Props = {
  tag: string;
};

const TagIcon = ({ tag }: Props) => {
  return (
    <div className="text-sm px-2 m-1 bg-qiita text-white rounded">{tag}</div>
  );
};

export default TagIcon;
