import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title?: string;
  description: string;
};

const CommonMeta = ({ title, description }: Props) => {
  const router = useRouter();

  return (
    <Head>
      <title>
        {router.pathname === "/" ? "Shiho's Site" : `${title} | Shiho's Site`}
      </title>
      <meta charSet="utf-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content="" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:title"
        content={
          router.pathname === "/" ? "Shiho's Site" : `${title} | Shiho's Site`
        }
      />
      <meta property="og:description" content={description} />
      <meta
        property="og:type"
        content={router.pathname === "/" ? "website" : "article"}
      />
      <meta
        property="og:url"
        content={process.env.SITE_URL + router.pathname}
      />
      <meta property="og:image" content="" />
      <meta
        property="og:site_name"
        content={router.pathname === "/" ? "website" : "article"}
      />
      <meta property="og:locale" content="ja_JP" />
      <link
        rel="shortcut icon"
        href={`${process.env.SITE_URL}/favicon.ico`}
        type="image/x-icon"
      />
      <link
        rel="apple-touch-icon"
        href={`${process.env.SITE_URL}/apple-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href={`${process.env.SITE_URL}/apple-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href={`${process.env.SITE_URL}/apple-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href={`${process.env.SITE_URL}/apple-touch-icon.png`}
      />
      <link rel="start" href={process.env.SITE_URL} title="Shiho's Site" />
      <link rel="canonical" href={process.env.SITE_URL + router.pathname} />
    </Head>
  );
};

export default CommonMeta;
