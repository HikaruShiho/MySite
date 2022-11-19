import axios from "axios";
import { Work } from "types/work";

/**
 * SanityからWorkデータを全件取得する
 */
export const fetchWorks = async () => {
  try {
    const { works } = await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/works`)
      .then((res) => res.data);
    return works;
  } catch (e) {
    console.log(e);
  }
};

/**
 * Sanityから特定のWorkデータを1件取得する
 * @param id WorkのID
 */
export const fetchWorkData = async (id: string) => {
  try {
    const { work } = await axios
      .get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/work?id=${id}`)
      .then((res) => res.data);
    return work;
  } catch (e) {
    console.log(e);
  }
};
