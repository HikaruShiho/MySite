import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Meta from "components/common/Meta";

const index = () => {
  return (
    <>
      <Meta title={"Profile"} description={""} />
      <Header />
      <main className="bg-baseColor03">
        <div className="w-full max-w-7xl mx-auto px-10 pt-12">
          <h2 className="text-6xl text-accentColor02 font-bold">Profile</h2>
          <p className="pt-4">プロフィール</p>
        </div>
        <div className="p-10">
          <ul className="w-full max-w-7xl mx-auto flex flex-wrap py-5 px-5 bg-white rounded-xl"></ul>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default index;
