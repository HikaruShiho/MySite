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
      <main className="bg-baseColor03">
        <div className="bg-keyvisual-background bg-cover">
          <div className="w-full max-w-7xl mx-auto px-10 py-12">
            <h2 className="text-6xl text-white font-bold">Works</h2>
            <p className="text-white pt-4">製作物</p>
          </div>
        </div>
        <div className="bg-white">
          <ul className="flex flex-wrap py-5 px-5 w-full max-w-7xl mx-auto">
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
