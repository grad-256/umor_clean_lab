// components/Adsense.tsx
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const Adsense = () => {
  const { asPath } = useRouter()

  useEffect(() => {
    const wrapper = document.querySelector('.c-wrapper') as any
    const observer = new MutationObserver(function (mutations, observer) {
      wrapper.style.height = ''
    })

    observer.observe(wrapper, {
      attributes: true,
      attributeFilter: ['style'],
    })

    try {
      //@ts-ignore
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (err) {
      console.log(err)
    }
  }, [asPath])

  return (
    <div key={asPath}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-client={`${process.env.NEXT_PUBLIC_ADSENSE_ID_CLIENT}`}
        data-ad-slot={`${process.env.NEXT_PUBLIC_ADSENSE_ID_SLOT}`}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  )
}

export default Adsense
