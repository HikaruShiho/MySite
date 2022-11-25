import { GetStaticProps } from "next";
import { fetchArticles } from "utils/article/fetchArticle";
import { QiitaArticle } from "types/article";
import Card from "components/article/Card";
import { fetchOgImageUrl } from "utils/article/fetchOgImageUrl";
import Keyvisual from "components/common/Keyvisual";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "components/common/Layout";
import { jsonLdScriptProps } from "react-schemaorg";
import { BlogPosting } from "schema-dts";

type Props = {
  articles: QiitaArticle[];
};

const index = ({ articles }: Props) => {
  const meta = {
    title: "Qiita記事一覧 | Shiho's Portfolio",
    description: "Qiitaにて投稿した記事を掲載しています。",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/article`,
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
              {articles.map((article) => (
                <li
                  key={article.id}
                  className="w-full sm:w-1/2 md:w-2/6 px-2 md:px-5 py-2 md:py-3"
                >
                  <Card article={article} />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default index;

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
