import { GetServerSideProps } from "next";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Meta from "components/common/Meta";
import { fetchArticles } from "utils/article/fetchArticle";
import { QiitaArticle } from "types/article";
import Card from "components/article/Card";
import { fetchOgImageUrl } from "utils/article/fetchOgImageUrl";
import Keyvisual from "components/common/Keyvisual";

type Props = {
  articles: QiitaArticle[];
};

const index = ({ articles }: Props) => {
  return (
    <>
      <Meta
        title={"Qiita記事一覧"}
        description={"Qiitaにて投稿した記事を掲載しています。"}
      />
      <Header />
      <main className="bg-baseColor03 dark:bg-baseColor01">
        <Keyvisual title={"Qiita"} sub_title={"Qiitaで投稿した記事"} />
        <div className="bg-white pt-10 md:pt-16 pb-10 md:pb-16 dark:bg-baseColor01">
          <ul className="flex flex-wrap py-2 md:py-5 px-3 md:px-5 w-full max-w-7xl mx-auto">
            {articles.map((article) => (
              <li key={article.id} className="w-full sm:w-1/2 md:w-2/6 px-2 md:px-5 py-2 md:py-3">
                <Card article={article} />
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async () => {
  let articles: QiitaArticle[] = await fetchArticles();
  articles = await Promise.all(
    articles.map(async (article) => {
      const ogImageUrl = await fetchOgImageUrl(article.url).then((res) => res);
      return await { ...article, og_image_url: ogImageUrl };
    })
  );
  return {
    props: {
      articles,
    },
  };
};
