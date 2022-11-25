import Head from "next/head";
import { useRouter } from "next/router";

const Meta = () => {
  const router = useRouter();

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="keywords" content="エンジニア,ポートフォリオサイト" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        property="og:type"
        content={router.pathname === "/" ? "website" : "article"}
      />
      <meta
        property="og:image"
        content={`${process.env.NEXT_PUBLIC_BASE_URL}/share.jpg`}
      />
      <meta property="og:site_name" content="Shiho's Portfolio" />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary_large_image" />
      <link
        rel="shortcut icon"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/favicon.ico`}
        type="image/x-icon"
      />
      <link
        rel="apple-touch-icon"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/apple-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="120x120"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/apple-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="144x144"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/apple-touch-icon.png`}
      />
      <link
        rel="apple-touch-icon-precomposed"
        sizes="152x152"
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/apple-touch-icon.png`}
      />
      <link
        rel="start"
        href={process.env.NEXT_PUBLIC_BASE_URL}
        title="Shiho's Portfolio"
      />
    </Head>
  );
};

export default Meta;
