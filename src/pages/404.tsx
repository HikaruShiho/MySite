import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import { jsonLdScriptProps } from "react-schemaorg";
import { WebPage } from "schema-dts";
import { url } from "inspector";

const Custom404 = () => {
  const meta = {
    title: "404 Not Found | Shiho's Portfolio",
    description: "指定されたページが見つかりません。",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/404`,
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
          {...jsonLdScriptProps<WebPage>({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: meta.title,
            url: meta.url,
            image: `${process.env.NEXT_PUBLIC_BASE_URL}/share.jpg`,
            description: meta.description,
          })}
        />
      </Head>
      <motion.div
        initial={{ opacity: 0, translateY: "50px" }}
        animate={{ opacity: 1, translateY: "0%" }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
      >
        <div className="flex h-screen items-center justify-center bg-accentColor02">
          <div>
            <h2 className="text-white font-bold text-4xl text-center md:text-7xl">
              404
            </h2>
            <h3 className="text-white font-bold text-base md:text-2xl text-center pt-3 md:pt-5">
              指定されたページが見つかりません
            </h3>
            <div className="flex justify-center pt-6 md:pt-8">
              <Link
                href="/"
                className="block w-40 md:w-52 bg-white rounded-full text-center text-sm md:text-base py-2 md:py-3 font-bold border-2 border-white text-accentColor02 transition-all duration-300 hover:text-white hover:bg-accentColor02"
              >
                トップへ戻る
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Custom404;
