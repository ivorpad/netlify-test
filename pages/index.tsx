import Link from 'next/link'
import { useEffect } from 'react'
import Layout from '../components/Layout'

const IndexPage = (props) => {

  console.log(
    process.env.LAMBDA_URL, 
    process.env.GLOBAL_ALL_ENVS, 
    process.env.MY_URL, 
    process.env.DEPLOY_PRIME_URL,
    process.env.CONTEXT,
    );
   
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