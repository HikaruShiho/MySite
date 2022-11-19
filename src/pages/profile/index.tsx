import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Meta from "components/common/Meta";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <>
      <Meta title={"Profile"} description={""} />
      <Header />
      <main className="bg-baseColor03">
        <div className="bg-keyvisual-background bg-cover">
          <div className="w-full max-w-7xl mx-auto px-10 py-12">
            <h2 className="text-6xl text-white font-bold">Profile</h2>
            <p className="text-white pt-4">プロフィール</p>
          </div>
        </div>
        <section className="bg-white">
          <h3 className="w-full max-w-7xl mx-auto px-10 pt-20">
            <span className="text-4xl font-bold border-l-8 pl-4 leading-none border-accentColor02 inline-block">
              About me
            </span>
          </h3>
          <div className="w-full max-w-7xl mx-auto px-10 pt-10 pb-24">
            <dl className="flex">
              <dt className="w-60 pr-8">
                <Image
                  src="/images/profile/profile.jpg"
                  width={400}
                  height={400}
                  alt="プロフィール画像"
                  className="rounded-full"
                />
              </dt>
              <dd className="flex-1">
                <div className="leading-loose">
                  ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。ここに文字が入ります。
                </div>
                <ul className="flex pt-5 space-x-2">
                  <li>
                    <Link
                      href="https://twitter.com/shhkr1312"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-all duration-300 hover:opacity-70"
                    >
                      <Image
                        src="/images/profile/icon_twitter.jpg"
                        width={50}
                        height={50}
                        alt="Twitter"
                        className="rounded-full"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://github.com/HikaruShiho"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-all duration-300 hover:opacity-70"
                    >
                      <Image
                        src="/images/profile/icon_github.jpg"
                        width={50}
                        height={50}
                        alt="Github"
                        className="rounded-full"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="hhttps://qiita.com/shiho97797"
                      target="_blank"
                      rel="noreferrer"
                      className="transition-all duration-300 hover:opacity-70"
                    >
                      <Image
                        src="/images/profile/icon_qiita.jpg"
                        width={50}
                        height={50}
                        alt="Qiita"
                        className="rounded-full"
                      />
                    </Link>
                  </li>
                </ul>
              </dd>
            </dl>
          </div>
        </section>
        <section>
          <h3 className="w-full max-w-7xl mx-auto px-10 pt-20">
            <span className="text-4xl font-bold border-l-8 pl-4 leading-none border-accentColor02 inline-block">
              Skill
            </span>
          </h3>
          <div className="w-full max-w-7xl mx-auto px-10 pt-10 pb-28 text-center font-bold text-2xl text-gray-400">
            <ul>
              <li>
                <Image
                  src={"/images/profile/skill/icon_html.jpg"}
                  width={200}
                  height={200}
                  alt={"HTML5"}
                  className="rounded-full"
                />
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default index;
