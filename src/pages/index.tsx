import Meta from "components/common/Meta";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

export default function Home() {
  return (
    <>
      <Meta description={"トップページです"} />
      <Header />
      <main>
        <div className="bg-top-keyvisual-background bg-center md:bg-right bg-no-repeat bg-cover py-40 md:py-52 border-t-2 border-gray-100 dark:bg-top-keyvisual-background-dark dark:border-baseColor01">
          <h2 className="w-full max-w-5xl mx-auto text-3xl leading-normal md:leading-snug md:text-5xl px-5 md:px-10 font-bold dark:text-white">
            Welcome to
            <br />
            my portfolio site!
          </h2>
        </div>
        <section className="dark:bg-baseColor01 border-t-2 border-gray-100 dark:border-baseColor01">
          <h3 className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-10 md:pt-20 text-center">
            <span className="text-3xl md:text-6xl font-bold text-accentColor02">
              About
            </span>
            <span className="block text-xs md:text-base font-bold pt-2 md:pt-3 dark:text-white">
              このサイトについて
            </span>
          </h3>
          <div className="w-full max-w-7xl mx-auto text-sm md:text-base px-5 md:px-10 pt-4 md:pt-8 pb-16 md:pb-24">
            <p className="leading-8 md:leading-10 md:text-center dark:text-white">
              なんちゃってエンジニアしほっちのポートフォリオサイトです。
              <br />
              制作物やQiita記事、身につけたスキルを掲載しています。
              <br />
              フロントエンド・サーバーサイド・インフラなど様々なスキルを身につけ、
              <br className="hidden md:inline" />
              フルスタックエンジニアになることを目指し日々努力中。
            </p>
            <div className="flex justify-center pt-6 md:pt-10">
              <Link
                className="block w-48 md:w-80 bg-accentColor02 rounded-full text-center text-sm md:text-base py-2 md:py-3 font-bold border-2 border-accentColor02 text-white transition-all duration-300 hover:text-accentColor02 hover:bg-white"
                href="/profile"
              >
                プロフィールを見る
              </Link>
            </div>
          </div>
        </section>
        <section className="bg-black bg-top-works-background bg-right bg-no-repeat bg-contain">
          <h3 className="w-full max-w-4xl mx-auto px-5 md:px-10 pt-12 md:pt-24">
            <span className="text-3xl md:text-6xl font-bold text-white">
              Works
            </span>
          </h3>
          <div className="w-full max-w-4xl mx-auto px-5 md:px-10 pt-3 md:pt-8 pb-16 md:pb-32">
            <p className="text-xs md:text-base text-white">
              過去の製作物を掲載しています。
            </p>
            <div className="pt-6 md:pt-10">
              <Link
                className="block w-40 md:w-80 bg-accentColor02 rounded-full text-center text-sm md:text-base py-2 md:py-3 font-bold border-2 border-accentColor02 text-white transition-all duration-300 hover:text-accentColor02 hover:bg-white"
                href="/works"
              >
                製作物一覧
              </Link>
            </div>
          </div>
        </section>
        <section className="dark:bg-baseColor01 border-t-2 border-gray-100 dark:border-baseColor01">
          <h3 className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-10 md:pt-20 text-center">
            <span className="text-3xl md:text-6xl font-bold text-twitter">
              Contact
            </span>
            <span className="block text-xs md:text-base font-bold pt-2 md:pt-3 dark:text-white">
              お問い合わせ
            </span>
          </h3>
          <div className="w-full max-w-7xl mx-auto text-sm md:text-base px-5 md:px-10 pt-4 md:pt-8 pb-16 md:pb-24">
            <p className="leading-8 md:leading-10 md:text-center dark:text-white">
              このサイトや私について何かありましたら、
              <br className="hidden md:inline" />
              Twitterからダイレクトメッセージをお送りください。
            </p>
            <div className="flex justify-center pt-6 md:pt-10">
              <Link
                href="https://twitter.com/shhkr1312"
                target="_blank"
                rel="noreferrer"
                className="block w-48 md:w-80 bg-twitter rounded-full text-center text-base md:text-lg py-2 md:py-3 font-bold border-2 border-twitter text-white transition-all duration-300 hover:text-twitter hover:bg-white"
              >
                <span className="relative ml-5 md:ml-6">
                  Twitter
                  <BsTwitter className="w-5 md:w-6 h-5 md:h-6 absolute -top-0.5 -left-8 md:-left-9" />
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
