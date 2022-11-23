import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../../../sanity/config";
import { Work } from "types/work";

type Data = {
  works: Work[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const worksQuery = groq`
    * [_type == "work"] {
      ...,
      "thumbnail_url": thumbnail.asset->url
    } | order(_createdAt desc)
  `;
  const works: Work[] = await sanityClient.fetch(worksQuery);
  res.status(200).json({ works });
}
