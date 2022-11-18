import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "lib/sanity/config";
import { Work } from "types/work";

type Data = {
  work: Work;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id } = req.query;
  console.log(id);
  
  const workQuery = groq`
    * [_type == "work" && _id == "${id}"] {
      ...,
      "thumbnail_url": thumbnail.asset->url
    }
  `;
  const work: Work = await sanityClient.fetch(workQuery);
  console.log("api>>>>>>>>>>>>>>>>",work);
  res.status(200).json({ work });
}
