import React, { Fragment } from 'react'
import { GetStaticProps } from 'next'
import DetailQiita from '@/components/DetailQiita'

type CONTENTSTYPE = {
  newsContents: {
    node: {
      newsItemId: number
      title: string
      date: string
    }
  }[]
}

const Hobby: React.FC<CONTENTSTYPE> = ({ newsContents }) => {
  return (
    <DetailQiita
      title="Skill Blog"
      newsContents={newsContents}
      link="/skill/qiita/"
    />
  )
}

export default Hobby

export const getStaticProps: GetStaticProps = async () => {
  const qiitaRes = await fetch(
    `${process.env.NEXT_PUBLIC_QIITA_API}items?per_page=100`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_QIITA}`,
      },
    }
  )
  const qiitaContents = await qiitaRes.json()

  return {
    props: {
      newsContents: qiitaContents,
    },
  }
}
