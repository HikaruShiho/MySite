import { sanityClient } from "lib/sanity/config";
import { groq } from "next-sanity";
import { Work } from "types/work";

/**
 * SanityからWorkデータを全件取得する
 */
export const fetchWorks = async () => {
  const worksQuery = groq`
    * [_type == "work"] {
      ...,
      "thumbnail_url": thumbnail.asset->url
    } | order(_createdAt desc)
  `;
  const works: Work[] = await sanityClient.fetch(worksQuery);
  return works;
};

/**
 * Sanityから特定のWorkデータを1件取得する
 * @param id WorkのID
 */
export const fetchWorkData = async (id: string) => {
  const workQuery = groq`
    * [_type == "work" && _id == "${id}"] {
      ...,
      "thumbnail_url": thumbnail.asset->url
    }
  `;
  try {
    const work: Work = await sanityClient.fetch(workQuery);
    return work;
  } catch (e) {
    console.log(e);
  }
};
