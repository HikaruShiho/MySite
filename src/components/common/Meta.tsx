import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { GA_TRACKING_ID, pageview } from "utils/gtag";

const Meta = () => {
  const router = useRouter();
  useEffect(() => {
    if (!GA_TRACKING_ID) return;
    const handleRouteChange = (url: string) => {
      pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <Head>
      {GA_TRACKING_ID && (
        <>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
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
        href={`${process.env.NEXT_PUBLIC_BASE_URL}/`}
        title="Shiho's Portfolio"
      />
    </Head>
  );
};

export default Meta;
