import { fetchOgp } from "ogp-fetcher";

export const fetchOgImageUrl = async (url: string) => {
  const data = await fetchOgp([url]);
  return data[0]["og:image"];
};
