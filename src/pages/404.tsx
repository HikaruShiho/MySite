import Meta from "components/common/Meta";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <Meta title={"404"} description={"指定されたページが見つかりません。"} />
      <div className="flex h-screen items-center justify-center bg-accentColor02">
        <div>
          <h2 className="text-white font-bold text-4xl text-center md:text-7xl">404</h2>
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
    </>
  );
};

export default Custom404;
