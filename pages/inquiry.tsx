import React from 'react'
import styles from '@/styles/Home.module.scss'
import Layout from '@/components/Layout'

const Inquiry: React.FC = () => {
  return (
    <Layout title="お問い合わせ | Hobby Blog" type="article">
      <div className={`${styles.c_column_detail}`}></div>
    </Layout>
  )
}

export default Inquiry
