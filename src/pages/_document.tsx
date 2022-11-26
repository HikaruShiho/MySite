import MeasurementTag from "components/common/MeasurementTag";
import { Html, Head, Main, NextScript } from "next/document";
import { GTM_ID } from "utils/gtag";

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <MeasurementTag />
      </Head>
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
