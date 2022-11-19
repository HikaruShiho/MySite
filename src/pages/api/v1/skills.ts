import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "lib/sanity/config";
import { Skill } from "types/profile";

type Data = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const skillsQuery = groq`
    * [_type == "skill"] {
      "icon_image_url": skill[].asset->url
    }
  `;
  const skills = await sanityClient.fetch(skillsQuery);
  res.status(200).json({ skills });
}
