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
      <Meta title={"Qiita記事一覧"} description={"Qiitaにて投稿した記事を掲載しています。"} />
      <Header />
      <main className="bg-baseColor03">
        <div className="w-full max-w-7xl mx-auto px-10 pt-12">
          <h2 className="text-6xl text-qiita font-bold">Qiita</h2>
          <p className="pt-4">Qiitaにて投稿した記事の一覧</p>
        </div>
        <div className="p-10">
          <ul className="w-full max-w-7xl mx-auto flex flex-wrap py-5 px-5 bg-white rounded-xl">
            {articles.map((article) => (
              <li key={article.id} className="w-2/6 px-5 py-3">
                <Card article={article}/>
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
