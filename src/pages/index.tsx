import Meta from "components/common/Meta";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Meta description={"トップページです"} />
      <Header />
      <main>
        <div className="bg-top-keyvisual-background bg-right bg-no-repeat bg-cover py-52 border-t-2 border-gray-100">
          <h2 className="w-full max-w-7xl mx-auto text-5xl px-10 font-bold leading-normal drop-shadow-lg">
            Welcome to
            <br />
            my portfolio site!
          </h2>
        </div>
        <section className="border-t-2 border-gray-100">
          <h3 className="w-full max-w-7xl mx-auto px-10 pt-20 text-center">
            <span className="text-4xl font-bold text-accentColor02">About</span>
            <span className="block font-bold pt-3">このサイトについて</span>
          </h3>
          <div className="w-full max-w-7xl mx-auto px-10 pt-8 pb-24">
            <p className="leading-10 text-center">
              なんちゃってエンジニアしほっちのポートフォリオサイトです。
              <br />
              制作物やQiita記事、身につけたスキルを掲載しています。
              <br />
              フロントエンド・サーバーサイド・インフラなど様々なスキルを身につけ、
              <br />
              フルスタックエンジニアになることを目指し日々努力中。
            </p>
            <div className="flex justify-center pt-8 md:pt-10">
              <Link
                className="block w-40 md:w-80 bg-accentColor02 rounded-full text-center text-sm md:text-base py-2 md:py-3 font-bold border-2 border-accentColor02 text-white transition-all duration-300 hover:text-accentColor02 hover:bg-white"
                href="/profile"
              >
                プロフィールを見る
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-black bg-top-works-background bg-right bg-no-repeat bg-contain">
          <h3 className="w-full max-w-5xl mx-auto px-10 pt-24">
            <span className="text-6xl font-bold text-white">Works</span>
          </h3>
          <div className="w-full max-w-5xl mx-auto px-10 pt-8 pb-32">
            <p className="text-white">過去の製作物を掲載しています。</p>
            <div className=" pt-8 md:pt-10">
              <Link
                className="block w-40 md:w-80 bg-accentColor02 rounded-full text-center text-sm md:text-base py-2 md:py-3 font-bold border-2 border-accentColor02 text-white transition-all duration-300 hover:text-accentColor02 hover:bg-white"
                href="/works"
              >
                製作物一覧
              </Link>
            </div>
          </div>
        </section>
        <section>
          <h3 className="w-full max-w-7xl mx-auto px-10 pt-20 text-center">
            <span className="text-4xl font-bold text-accentColor02">
              Contact
            </span>
            <span className="block font-bold pt-3">お問い合わせ</span>
          </h3>
          <div className="w-full max-w-5xl mx-auto px-10 pt-8 pb-32">
            <p className="text-center leading-10 text-2xl font-bold text-gray-400">
              工事中・・・
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
