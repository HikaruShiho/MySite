import { GetServerSideProps } from "next";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Meta from "components/common/Meta";
import { fetchArticles } from "utils/article/fetchArticle";
import { QiitaArticle } from "types/article";
import Card from "components/article/Card";

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
      <main className="bg-baseColor03">
        <div className="bg-keyvisual-background bg-cover">
          <div className="w-full max-w-7xl mx-auto px-10 py-12">
            <h2 className="text-6xl text-white font-bold">Qiita</h2>
            <p className="text-white pt-4">Qiitaで投稿した記事</p>
          </div>
        </div>
        <div className="bg-white  pb-12">
          <ul className="flex flex-wrap py-5 px-5 w-full max-w-7xl mx-auto">
            {articles.map((article) => (
              <li key={article.id} className="w-2/6 px-5 py-3">
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
  const articles: QiitaArticle[] = await fetchArticles();
  return {
    props: {
      articles,
    },
  };
};
