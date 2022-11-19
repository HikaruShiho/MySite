import axios from "axios";

const QIITA_API_URL = "https://qiita.com/api/v2/authenticated_user/items";

export const fetchArticles = async () => {
  try {
    const { data } = await axios.get(QIITA_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA_ACCESS_TOKEN}`,
      },
    });
    return data;
  } catch (e) {
    console.log(e);
  }
};
