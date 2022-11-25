import Keyvisual from "components/common/Keyvisual";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { fetchSkills } from "utils/profile/fetchSkill";
import { motion } from "framer-motion";
import Head from "next/head";
import Layout from "components/common/Layout";
import { jsonLdScriptProps } from "react-schemaorg";
import { BlogPosting } from "schema-dts";

type Props = {
  skills: string[];
};

const index = ({ skills }: Props) => {
  const meta = {
    title: "Profile | Shiho's Portfolio",
    description:
      "エンジニアしほっちのプロフィールページです。身につけたスキルや経歴、SNSを掲載しています。",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/profile`,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:url" content={meta.url} />
        <link rel="canonical" href={meta.url} />
        <script
          {...jsonLdScriptProps<BlogPosting>({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            name: meta.title,
            url: meta.url,
            image: `${process.env.NEXT_PUBLIC_BASE_URL}/share.jpg`,
            description: meta.description,
            headline: meta.title,
            author: "Shiho",
          })}
        />
      </Head>
      <Layout>
        <motion.div
          initial={{ opacity: 0, translateY: "30px" }}
          animate={{ opacity: 1, translateY: "0%" }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeOut", duration: 0.6 }}
        >
          <Keyvisual title={"Profile"} sub_title={"プロフィール"} />
          <section className="bg-white dark:bg-baseColor01">
            <h3 className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-10 md:pt-20">
              <span className="text-2xl md:text-4xl font-bold border-l-4 md:border-l-8 pl-2 md:pl-4 leading-none border-accentColor02 inline-block dark:text-white">
                About me
              </span>
            </h3>
            <div className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-5 md:pt-10 pb-12 md:pb-24">
              <dl className="block md:flex">
                <dt className="w-52 md:w-72 pr-0 md:pr-8 mx-auto">
                  <Image
                    src="/images/profile/profile.jpg"
                    width={400}
                    height={400}
                    alt="プロフィール画像"
                    className="rounded-full"
                  />
                </dt>
                <dd className="w-full md:flex-1 text-sm md:text-base pt-4 md:pt-0">
                  <div className="leading-loose dark:text-white">
                    兵庫出身、埼玉在住のしほっちです。
                    <br />
                    高校卒業後、大手高炉メーカーにて6年間勤務。
                    <br />
                    2019年からWeb制作会社に勤め、2021年に上京しSES企業に転職するも、
                    <br className="hidden md:inline" />
                    自身のキャリアに疑問を感じ、 G&apos;s ACADEMY
                    TOKYOにて半年間の修行を経て、
                    <br className="hidden md:inline" />
                    現在は、ベンチャー企業でフロントエンドエンジニアとして活動中。
                    <br />
                    筋トレが大好きで、BIG3トータル500kgを目標にジムでトレーニングしています。
                  </div>
                  <ul className="flex justify-center md:justify-start pt-4 md:pt-5 space-x-3">
                    <li>
                      <Link
                        href="https://twitter.com/shhkr1312"
                        target="_blank"
                        rel="noreferrer"
                        className="transition-all duration-300 hover:opacity-70"
                      >
                        <Image
                          src="/images/profile/icon_twitter.png"
                          width={40}
                          height={40}
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
                          src="/images/profile/icon_github.png"
                          width={40}
                          height={40}
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
                          src="/images/profile/icon_qiita.png"
                          width={40}
                          height={40}
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
          <section className="bg-baseColor03 dark:bg-baseColor01">
            <h3 className="w-full max-w-7xl mx-auto px-5 md:px-10 pt-10 md:pt-20">
              <span className="text-2xl md:text-4xl font-bold border-l-4 md:border-l-8 pl-2 md:pl-4 leading-none border-accentColor02 inline-block dark:text-white">
                Skill
              </span>
            </h3>
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-5 md:pt-8 pb-12 md:pb-28 text-center font-bold ">
              <ul className="flex flex-wrap">
                {skills?.map((skill, i) => (
                  <li key={i} className="w-1/4 sm:w-1/5 md:w-1/6 p-1 md:p-2">
                    <Image
                      src={skill}
                      width={200}
                      height={200}
                      alt={""}
                      className="rounded-full"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </motion.div>
      </Layout>
    </>
  );
};

export default index;

export const getStaticProps: GetStaticProps = async () => {
  const skills = await fetchSkills();
  return {
    props: {
      skills: skills.icon_image_url,
    },
  };
};
