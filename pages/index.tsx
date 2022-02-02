import Link from 'next/link'
import { useEffect } from 'react'
import Layout from '../components/Layout'

const IndexPage = (props) => {

  console.log("Environment", process.env.ACCESS_TOKEN, process.env.NEXT_PUBLIC_ACCESS_TOKEN, process.env.NEXT_PUBLIC_SELF_URL, process.env.NEXT_PUBLIC_CONTEXT);
  
  return <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
}

export default IndexPage

export async function getServerSideProps(context) {
  const data = {hello: 'world'}
  return {
    props: { data },
  }
}