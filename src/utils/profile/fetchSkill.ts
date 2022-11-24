import { sanityClient } from "lib/sanity/config";
import { groq } from "next-sanity";

/**
 * Sanityからアイコン画像を全件取得する
 */
export const fetchSkills = async () => {
  const skillsQuery = groq`
    * [_type == "skill"] {
      "icon_image_url": skill[].asset->url
    }
  `;
  try {
    const skills = await sanityClient.fetch(skillsQuery);
    return skills[0];
  } catch (e) {
    console.log(e);
  }
};
