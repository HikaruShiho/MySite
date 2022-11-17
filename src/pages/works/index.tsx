import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Meta from "components/common/Meta";
import { GetStaticProps } from "next";
import { Work } from "types/work";
import { fetchWorks } from "utils/work/fetchWork";
import Card from "components/work/Card";

type Props = {
  works: Work[];
};

const index = ({ works }: Props) => {
  return (
    <>
      <Meta title={"Works"} description={""} />
      <Header />
      <main className="bg-baseColor03 pb-12">
        <div className="w-full max-w-7xl mx-auto px-10 pt-12">
          <h2 className="text-6xl text-accentColor02 font-bold">Works</h2>
          <p className="pt-4">製作物</p>
        </div>
        <div className="w-full max-w-7xl mx-auto p-10">
          <ul className="flex flex-wrap py-5 px-5 bg-white rounded-xl">
            {works.map((work) => (
              <li key={work._id} className="w-1/2 px-5 py-3">
                <Card work={work} />
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { works } = await fetchWorks();
  return {
    props: {
      works,
    },
  };
};
