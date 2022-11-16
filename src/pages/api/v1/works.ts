import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "lib/sanity/config";
import { Work } from "types/work";

type Data = {
  works: Work[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const workQuery = groq`
    * [_type == "work"] {
      _id,
      ...,
      "thumbnail_url": thumbnail.asset->url
    } | order(_createdAt, desc)
  `;
  const works: Work[] = await sanityClient.fetch(workQuery);
  res.status(200).json({ works });
}
