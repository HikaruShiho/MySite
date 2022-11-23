import Layout from "components/common/Layout";
import Keyvisual from "components/common/Keyvisual";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Work } from "types/work";
import { fetchWorks, fetchWorkData } from "utils/work/fetchWork";
import { motion } from "framer-motion";

type Props = {
  work: Work[];
};

const WorkId = ({ work }: Props) => {
  return (
    <>
      <Head>
        <title>{work[0].title} | Works | Shiho&apos;s Portfolio</title>
        <meta name="description" content={work[0].description} />
        <meta
          property="og:title"
          content={`${work[0].title} | Works | Shiho's Portfolio`}
        />
        <meta property="og:description" content={work[0].description} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_BASE_URL}/works/${work[0]._id}`}
        />
        <link
          rel="canonical"
          href={`${process.env.NEXT_PUBLIC_BASE_URL}/works/${work[0]._id}`}
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
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-wrap py-10 md:py-20 px-5 md:px-6 bg-white  dark:bg-baseColor01">
              <ul className="flex flex-wrap">
                <li className="px-0 md:px-4 w-full md:w-2/4">
                  <Image
                    src={
                      work[0].thumbnail_url
                        ? work[0].thumbnail_url
                        : "/images/no_image.jpg"
                    }
                    width={960}
                    height={540}
                    alt={work[0].title}
                    className="rounded-xl"
                  />
                </li>
                <li className="px-0 md:px-4 pt-5 md:pt-0 w-full md:w-2/4">
                  <h3 className="text-lg md:text-2xl font-bold dark:text-white">
                    {work[0].sub_title}　{work[0].title}
                  </h3>
                  <div className="pt-0 md:pt-3">
                    <div className="py-1 md:py-3">
                      <Link
                        href={work[0].url}
                        target="_blank"
                        className="text-sm md:text-base text-gray-300 hover:opacity-70 transition-all duration-300 dark:text-gray-500"
                      >
                        {work[0].url}
                      </Link>
                    </div>
                    <dl className="flex py-1">
                      <dt className="w-14 md:w-20 pt-1.5 md:pt-1 dark:text-white text-xs md:text-base">担当箇所</dt>
                      <dd className="flex-1">
                        <div className="flex flex-wrap">
                          {work[0].part.map((icon, i) => (
                            <div
                              key={i}
                              className="text-xs px-1 md:px-2 py-0.5 md:py-1 m-1 bg-accentColor01 text-white rounded"
                            >
                              {icon}
                            </div>
                          ))}
                        </div>
                      </dd>
                    </dl>
                    <dl className="flex py-1">
                      <dt className="w-14 md:w-20 pt-1.5 md:pt-1 dark:text-white text-xs md:text-base">
                        使用技術
                      </dt>
                      <dd className="flex-1">
                        <div className="flex flex-wrap">
                          {work[0].technology_stack.map((stack, i) => (
                            <div
                              key={i}
                              className="text-xs px-1 md:px-2 py-0.5 md:py-1 m-1 bg-accentColor01 text-white rounded"
                            >
                              {stack}
                            </div>
                          ))}
                        </div>
                      </dd>
                    </dl>
                  </div>
                </li>
              </ul>
              <dl className="w-full">
                <dt>
                  <h3 className="mx-0 md:mx-4 pt-5 md:t-8 pb-2 border-b-2 border-baseColor03 text-2xl md:text-4xl text-accentColor02 font-bold relative dark:text-white">
                    About
                    <div className="w-5 md:w-10 h-0.5 bg-accentColor02 absolute -bottom-0.5 left-0"></div>
                  </h3>
                </dt>
                <dd className="pt-2 md:pt-4 mx-0 md:mx-4 text-sm md:text-base dark:text-white">
                  <span
                    className="leading-loose"
                    dangerouslySetInnerHTML={{ __html: work[0].description }}
                  ></span>
                </dd>
              </dl>
            </div>
          </div>
        </motion.div>
      </Layout>
    </>
  );
};

export default WorkId;

export const getStaticPaths: GetStaticPaths = async () => {
  const works: Work[] = await fetchWorks();
  const paths = works.map((work: Work) => {
    return { params: { id: work._id } };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const work: Work = await fetchWorkData(params?.id as string);
  return {
    props: {
      work,
    },
  };
};
