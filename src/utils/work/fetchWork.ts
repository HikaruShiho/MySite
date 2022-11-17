import axios from "axios";

/**
 * SanityからWorkデータを全件取得する
 * @returns {Promise}
 */
export const fetchWorks = async () => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/works`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * Sanityから特定のWorkデータを1件取得する
 * @param id
 * @returns {Promise}
 */
export const fetchWorkData = async (id: string) => {
  try {
    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/work?id=${id}`
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};
