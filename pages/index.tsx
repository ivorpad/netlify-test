import Link from 'next/link'
import { useEffect } from 'react'
import Layout from '../components/Layout'

const IndexPage = (props) => {

  console.log(process.env.CONTEXT);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const resp = await fetch(`http://localhost:3000/api/analytics/insert`).then(r => r.json())
        console.log(resp);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData()

  }, [])
  
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