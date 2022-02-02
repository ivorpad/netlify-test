import Link from 'next/link'
import { useEffect } from 'react'
import Layout from '../components/Layout'

const IndexPage = (props) => {

  console.log("Context", process.env.NEXT_PUBLIC_CONTEXT);
  
  return <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About Us</a>
      </Link>
    </p>
  </Layout>
}

export default IndexPage

export async function getStaticProps(context) {
  const data = {hello: 'world'}
  return {
    props: { data },
  }
}