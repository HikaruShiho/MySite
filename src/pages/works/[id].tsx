import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Keyvisual from "components/common/Keyvisual";
import Meta from "components/common/Meta";
import { GetStaticPaths, GetStaticProps } from "next";
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
      <Meta
        title={`${work[0].sub_title} ${work[0].title} | Works`}
        description={""}
      />
      <Header />
      <motion.div
        initial={{ opacity: 0, translateY: "50px" }}
        animate={{ opacity: 1, translateY: "0%" }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
      >
        <main className="bg-baseColor03 dark:bg-baseColor01">
          <Keyvisual title={"Works"} sub_title={"制作物"} />
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-wrap py-10 px-6 bg-white  dark:bg-baseColor01">
              <ul className="flex">
                <li className="px-4 w-2/4">
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
                <li className="px-4 w-2/4">
                  <h3 className="text-2xl font-bold dark:text-white">
                    {work[0].sub_title}　{work[0].title}
                  </h3>
                  <div className="pt-3">
                    <div className="py-3">
                      <Link
                        href={work[0].url}
                        target="_blank"
                        className="text-gray-300 hover:opacity-70 transition-all duration-300 dark:text-gray-500"
                      >
                        {work[0].url}
                      </Link>
                    </div>
                    <dl className="flex py-1">
                      <dt className="w-20 pt-1 dark:text-white">担当箇所</dt>
                      <dd className="flex-1">
                        <div className="flex flex-wrap">
                          {work[0].part.map((icon, i) => (
                            <div
                              key={i}
                              className="text-xs px-2 py-1 m-1 bg-accentColor01 text-white rounded"
                            >
                              {icon}
                            </div>
                          ))}
                        </div>
                      </dd>
                    </dl>
                    <dl className="flex py-1">
                      <dt className="w-20 pt-1 dark:text-white">使用技術</dt>
                      <dd className="flex-1">
                        <div className="flex flex-wrap">
                          {work[0].technology_stack.map((stack, i) => (
                            <div
                              key={i}
                              className="text-xs px-2 py-1 m-1 bg-accentColor01 text-white rounded"
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
              <dl className="w-full pb-12">
                <dt>
                  <h3 className="mx-4 pt-8 pb-2 border-b-2 border-baseColor03 text-4xl text-accentColor02 font-bold relative">
                    About
                    <div className="w-10 h-0.5 bg-accentColor02 absolute -bottom-0.5 left-0"></div>
                  </h3>
                </dt>
                <dd className="pt-4 mx-4 dark:text-white">
                  {work[0].description}
                </dd>
              </dl>
            </div>
          </div>
        </main>
        <Footer />
      </motion.div>
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
