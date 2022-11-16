import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Meta from "components/common/Meta";
import { GetServerSideProps } from "next";
import Image from "next/image";
import { Work } from "types/work";
import { fetchWorks } from "utils/work/fetchWork";

type Props = {
  works: Work[];
};

const index = ({ works }: Props) => {
  console.log(works);

  return (
    <>
      <Meta title={"Works"} description={""} />
      <Header />
      <main className="bg-baseColor03">
        <div className="w-full max-w-7xl mx-auto px-10 pt-12">
          <h2 className="text-6xl text-accentColor02 font-bold">Works</h2>
          <p className="pt-4">製作物</p>
        </div>
        <div className="w-full max-w-7xl mx-auto p-10">
          <ul className="flex flex-wrap py-5 px-5 bg-white rounded-xl">
            {works.map((work) => (
              <li key={work._id}>
                <Image
                  src={work.thumbnail_url}
                  width={100}
                  height={100}
                  alt={"sdxwdc"}
                />
              </li>
            ))}
          </ul>
        </div>
        <button onClick={fetchWorks}>押して</button>
      </main>
      <Footer />
    </>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { works } = await fetchWorks();
  return {
    props: {
      works,
    },
  };
};
