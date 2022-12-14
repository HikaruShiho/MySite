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
                breakClassName="border-2 rounded-lg flex item-center mx-1 md:mx-2 transition-all duration-300 hover:bg-accentColor02 hover:text-white hover:border-accentColor02 dark:text-white"
                breakLinkClassName="w-6 md:w-8 py-1.5 flex items-center justify-center"
                pageCount={Math.ceil(articles.length / perPage)}
                marginPagesDisplayed={0}
                pageRangeDisplayed={3}
                onPageChange={handlePageChange}
                containerClassName={
                  "h-12 md:h-16 pagination max-w-2xl mx-auto flex justify-center pt-5 md:t-10"
                }
                pageClassName={
                  "mx-1 md:mx-2 border-2 rounded-lg transition-all duration-300 dark:text-white hover:bg-accentColor02 hover:text-white hover:border-accentColor02"
                }
                pageLinkClassName={
                  "block w-6 md:w-8 py-0.5 md:py-1.5 text-sm md:text-base text-center"
                }
                activeClassName={
                  "active bg-accentColor02 text-white border-accentColor02"
                }
                previousClassName={
                  "pagination__previous border-2 rounded-lg flex item-center mr-1 md:mr-2 transition-all duration-300 hover:bg-accentColor02 hover:text-white hover:border-accentColor02 dark:text-white"
                }
                previousLinkClassName={
                  "w-6 md:w-8 py-1.5 flex items-center justify-center"
                }
                nextClassName={
                  "pagination__next border-2 rounded-lg flex item-center ml-1 md:ml-2 transition-all duration-300 hover:bg-accentColor02 hover:text-white hover:border-accentColor02 dark:text-white"
                }
                nextLinkClassName={
                  "w-6 md:w-8 py-1.5 flex items-center justify-center"
                }
                disabledClassName={"pagination__disabled hidden"}
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
