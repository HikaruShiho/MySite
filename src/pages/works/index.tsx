import { GetStaticProps } from "next";
import { Work } from "types/work";
import { fetchWorks } from "utils/work/fetchWork";
import Card from "components/work/Card";
import Keyvisual from "components/common/Keyvisual";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "components/common/Layout";
import { jsonLdScriptProps } from "react-schemaorg";
import { WebPage } from "schema-dts";

type Props = {
  works: Work[];
};

const index = ({ works }: Props) => {
  const meta = {
    title: "Shiho's Portfolio",
    description:
      "なんちゃってエンジニアしほっちのポートフォリオサイトです。過去の制作物やQiita記事、身につけたスキルを掲載しています。フロントエンド・サーバーサイド・インフラなど様々なスキルを身につけ、フルスタックエンジニアになることを目指し日々努力中。",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
  };

  return (
    <>
      <Head>
        <title>Works | Shiho&apos;s Portfolio</title>
        <meta name="description" content="過去の製作物を紹介しています。" />
        <meta property="og:title" content="Works | Shiho's Portfolio" />
        <meta
          property="og:description"
          content="過去の製作物を紹介しています。"
        />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/works`}
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/works`}
        />
        <script
          {...jsonLdScriptProps<WebPage>({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: meta.title,
            url: meta.url,
            image: `${meta.url}share.jpg`,
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
          <Keyvisual title={"Works"} sub_title={"制作物"} />
          <div className="bg-white dark:bg-baseColor01">
            <ul className="flex flex-wrap py-6 md:py-20 px-5 w-full max-w-7xl mx-auto">
              {works?.map((work) => (
                <li
                  key={work._id}
                  className="w-full md:w-1/2 px-0 md:px-5 py-3"
                >
                  <Card work={work} />
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
  const works = await fetchWorks();
  return {
    props: {
      works,
    },
  };
};
