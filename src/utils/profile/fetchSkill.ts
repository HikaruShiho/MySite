import axios from "axios";

/**
 * Sanityからアイコン画像を全件取得する
 */
export const fetchSkills = async () => {
  try {
    const skills = await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/skills`)
      .then((res) => res.data.skills[0]);
    return skills;
  } catch (e) {
    console.log(e);
  }
};
