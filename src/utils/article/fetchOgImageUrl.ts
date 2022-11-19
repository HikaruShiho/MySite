import { fetchOgp } from "ogp-fetcher";

export const fetchOgImageUrl = async (url: string) => {
  try {
    const data = await fetchOgp([url]);
    return data[0]["og:image"];
  } catch (e) {
    console.log(e);
  }
};
