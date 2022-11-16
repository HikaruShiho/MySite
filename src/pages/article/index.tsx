import { GetServerSideProps } from "next";
import Link from "next/link";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Meta from "components/common/Meta";
import { fetchOgImageUrl } from "utils/article/fetchOgImageUrl";

type Props = {
  ogImageUrl: string;
};

const index = ({ ogImageUrl }: Props) => {
  return (
    <>
      <Meta title={"記事一覧"} description={""} />
      <Header />
      <main>
        <div>
          <h2>記事一覧</h2>
        </div>
        <div>
          <ul>
            <li>
              <Link href={ogImageUrl} target="_blank">
                <dl>
                  <dt>
                    <img src={ogImageUrl} alt="" />
                  </dt>
                  <dd></dd>
                </dl>
              </Link>
            </li>
          </ul>
        </div>
        <button></button>
      </main>
      <Footer />
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  const ogImageUrl = await fetchOgImageUrl(
    "https://qiita.com/shiho97797/items/7d9c5f784aa1d36a2b37"
  );
  return {
    props: {
      ogImageUrl,
    },
  };
};
