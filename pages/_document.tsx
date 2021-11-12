/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { existsGaId, GA_ID } from '@/libs/gtag'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const adsenseId = process.env.NEXT_PUBLIC_ADSENSE_ID

    return (
      <Html>
        <Head>
          <script
            data-ad-client={adsenseId}
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
          {/* Google Analytics */}
          {existsGaId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
