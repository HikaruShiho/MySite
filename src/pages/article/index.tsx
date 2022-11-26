import { GetStaticProps } from "next";
import Head from "next/head";
import { useState } from "react";
import Card from "components/article/Card";
import Keyvisual from "components/common/Keyvisual";
import Layout from "components/common/Layout";
import { fetchOgImageUrl } from "utils/article/fetchOgImageUrl";
import { fetchArticles } from "utils/article/fetchArticle";
import { jsonLdScriptProps } from "react-schemaorg";
import ReactPaginate from "react-paginate";
import { QiitaArticle } from "types/article";
import { BlogPosting } from "schema-dts";
import { motion } from "framer-motion";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

type Props = {
  articles: QiitaArticle[];
};

const meta = {
  title: "Qiita記事一覧 | Shiho's Portfolio",
  description: "Qiitaにて投稿した記事を掲載しています。",
  url: `${process.env.NEXT_PUBLIC_BASE_URL}/article`,
};

const Index = ({ articles }: Props) => {
  const [offset, setOffset] = useState(0);
  const perPage: number = 9;

  /**
   * ページネーションのハンドラー
   */
  const handlePageChange = (e: { selected: number }) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => {
      const pageNumber = e.selected;
      setOffset(pageNumber * perPage);
    }, 500);
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <link rel="canonical" href={meta.url} />
        <script
          {...jsonLdScriptProps<BlogPosting>({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            name: meta.title,
            url: meta.url,
            image: `${process.env.NEXT_PUBLIC_BASE_URL}/share.jpg`,
            description: meta.description,
            headline: meta.title,
            author: "Shiho",
          })}
        />
      </Head>
      <Layout>
        <motion.div
          initial={{ opacity: 0, translateY: "50px" }}
          animate={{ opacity: 1, translateY: "0%" }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <Keyvisual title={"Qiita"} sub_title={"Qiitaで投稿した記事"} />
          <div className="bg-white pt-10 md:pt-16 pb-10 md:pb-16 dark:bg-baseColor01">
            <ul className="flex flex-wrap py-2 md:py-5 px-3 md:px-5 w-full max-w-7xl mx-auto">
              {articles.slice(offset, offset + perPage).map((article) => (
                <li
                  key={article.id}
                  className="w-full sm:w-1/2 md:w-2/6 px-2 md:px-5 py-2 md:py-3"
                >
                  <Card article={article} />
                </li>
              ))}
            </ul>
            {articles.length && (
              <ReactPaginate
                previousLabel={
                  <MdOutlineKeyboardArrowLeft className="w-5 h-5" />
                }
                nextLabel={<MdOutlineKeyboardArrowRight className="w-5 h-5" />}
                breakLabel={"..."}
                pageCount={Math.ceil(articles.length / perPage)} // 全部のページ数。端数の場合も考えて切り上げに。
                marginPagesDisplayed={0} // 一番最初と最後を基準にして、そこからいくつページ数を表示するか
                pageRangeDisplayed={5} // アクティブなページを基準にして、そこからいくつページ数を表示するか
                onPageChange={handlePageChange} // クリック時のfunction
                containerClassName={
                  "pagination max-w-2xl mx-auto flex justify-center pt-10"
                } // ページネーションであるulに着くクラス名
                pageClassName={
                  "mx-2 border-2 rounded-lg transition-all duration-300 hover:bg-accentColor02 hover:text-white hover:border-accentColor02"
                } //liのクラス名
                pageLinkClassName={"inline-block px-3 leading-9 text-center"} //aタグのクラス名
                activeClassName={
                  "active bg-accentColor02 text-white border-accentColor02"
                } // アクティブなページのliに着くクラス名
                previousClassName={
                  "pagination__previous border-2 rounded-lg flex item-center mr-2 transition-all duration-300 hover:bg-accentColor02 hover:text-white hover:border-accentColor02"
                } // 「<」のliに着けるクラス名
                previousLinkClassName={"flex items-center px-1.5"} // 「<」のaタグに着けるクラス名
                nextClassName={
                  "pagination__next border-2 rounded-lg flex item-center ml-2 transition-all duration-300 hover:bg-accentColor02 hover:text-white hover:border-accentColor02"
                } // 「>」のliに着けるクラス名
                nextLinkClassName={
                  "inline-block h-full flex items-center px-1.5"
                } // 「>」のaタグに着けるクラス名
                disabledClassName={"pagination__disabled hidden"} // 使用不可の「<,>」に着くクラス名
              />
            )}
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  let articles: QiitaArticle[] = await fetchArticles();
  articles = await Promise.all(
    articles.map(async (article) => {
      const ogImageUrl = await fetchOgImageUrl(article.url).then((res) => res);
      return { ...article, og_image_url: ogImageUrl };
    })
  );
  return {
    props: {
      articles,
    },
  };
};
