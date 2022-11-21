import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Meta from "components/common/Meta";
import { GetStaticProps } from "next";
import { Work, WorkBody } from "types/work";
import { fetchWorks } from "utils/work/fetchWork";
import Card from "components/work/Card";
import Keyvisual from "components/common/Keyvisual";
import { motion } from "framer-motion";

type Props = {
  works: Work[];
};

const index = ({ works }: Props) => {
  return (
    <>
      <Meta title={"Works"} description={""} />
      <Header />
      <motion.div
        initial={{ opacity: 0, translateY: "50px" }}
        animate={{ opacity: 1, translateY: "0%" }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 0.6 }}
      >
        <main className="bg-baseColor03 dark:bg-baseColor01">
          <Keyvisual title={"Works"} sub_title={"制作物"} />
          <div className="bg-white dark:bg-baseColor01">
            <ul className="flex flex-wrap py-6 md:py-20 px-5 w-full max-w-7xl mx-auto">
              {works.map((work) => (
                <li
                  key={work._id}
                  className="w-full md:w-1/2 px-0 md:px-5 py-3"
                >
                  <Card work={work} />
                </li>
              ))}
            </ul>
          </div>
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const works: Work[] = await fetchWorks();
  return {
    props: {
      works,
    },
  };
};
