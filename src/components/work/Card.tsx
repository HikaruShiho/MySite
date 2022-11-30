import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Work } from "types/work";

type Props = {
  work: Work;
};

const Card = ({ work }: Props) => {
  return (
    <Link href={`/works/${work._id}`} scroll={false}>
      <dl className="transition-all duration-300 hover:opacity-70">
        <dt>
          <Image
            src={
              work.thumbnail_url ? work.thumbnail_url : "/images/no_image.jpg"
            }
            width={960}
            height={540}
            alt={work.title}
            className="rounded-xl"
          />
        </dt>
        <dd className="text-center text-sm md:text-lg pt-2 md:pt-4 dark:text-white">
          {work.sub_title}
        </dd>
        <dd className="text-lg md:text-2xl font-bold text-center pt-0 md:pt-1 dark:text-white">
          {work.title}
        </dd>
      </dl>
    </Link>
  );
};

export default Card;
