import axios from "axios";

export const fetchWorks = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/works`
  );
  return data;
};
