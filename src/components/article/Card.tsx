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
        <dt>
          <Image
            src={String(article.og_image_url)}
            width={828}
            height={435}
            alt={article.title}
            className="border-2 rounded-t-xl border-gray-100"
          />
        </dt>
        <dd className="pt-2 md:pt-4 pb-3 md:pb-5 px-2 md:px-3 rounded-b-xl bg-gray-100">
          <ul className="flex flex-wrap">
            {article.tags.map((tag, i) => (
              <li key={i}>
                <TagIcon tag={tag.name} />
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    </Link>
  );
};

export default Card;
