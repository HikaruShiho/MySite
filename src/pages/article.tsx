import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Meta from "components/common/Meta";

const article = () => {
  return (
    <>
      <Meta title={"記事一覧"} description={""} />
      <Header />
      <main>記事一覧</main>
      <Footer />
    </>
  );
};

export default article;