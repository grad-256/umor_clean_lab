import React, { useEffect } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { store } from '@/app/store'
import { Provider as ReduxProvider } from 'react-redux'
import useBuildId from '@/libs/useBuildId'
import usePageView from '@/components/usePageView'
import 'tailwindcss/tailwind.css'
import '@/styles/globals.css'
import '@/styles/Common.scss'
import { existsGaId, GA_ID } from '@/libs/gtag'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.25 })

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  useBuildId()
  usePageView()

  useEffect(() => {
    const handleRouteChangeComplete = () => {
      NProgress.done()
    }

    const handleRouteChangeStart = () => {
      NProgress.start()
    }

    router.events.on('routeChangeComplete', handleRouteChangeComplete)
    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeError', () => NProgress.done())

    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete)
      router.events.off('routeChangeStart', handleRouteChangeStart)
    }
  })

  return (
    <>
      <Head>
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

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Umor Clean Lab - UCLab -のプロフィールを兼ねた趣味を掲載しているサイトです。日々の学習のアウトプットに使用しています。"
        />
        <meta property="og:url" content="https://256-anything.site/" />
        <meta property="og:locale" content="ja_JP" />
        <meta
          property="og:description"
          content="Umor Clean Lab - UCLab -のプロフィールを兼ねた趣味を掲載しているサイトです。日々の学習のアウトプットに使用しています。"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ReduxProvider store={store}>
        <Component {...pageProps} />
      </ReduxProvider>
    </>
  )
}

export default MyApp
