import React from "react";
import Link from "next/link";
import Image from "next/image";
import TagIcon from "./TagIcon";
import { QiitaArticle } from "types/article";

type Props = {
  article: QiitaArticle;
};

const Card = ({ article }: Props) => {
  return (
    <Link href={article.url} target="_blank">
      <dl className="transition-all duration-300 hover:opacity-70">
        <dt className="relative">
          <ul className="flex flex-wrap absolute top-1.5 left-1">
            {article.tags.map((tag, i) => (
              <li key={i}>
                <TagIcon tag={tag.name} key={i} />
              </li>
            ))}
          </ul>
          <Image
            src="/images/demo.jpg"
            width={400}
            height={220}
            alt="logo"
            className="border-2 rounded-t-xl border-gray-100"
          />
        </dt>
        <dd className="w-full font-bold pt-4 pb-5 px-3 rounded-b-xl bg-gray-100">
          {article.title}
        </dd>
      </dl>
    </Link>
  );
};

export default Card;
