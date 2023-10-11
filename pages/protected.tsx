import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import Layout from '../components/layout'
import AccessDenied from '../components/access-denied'

export default function Page () {
  const { data: session, status } = useSession()
  const loading = status === 'loading'
  const [ content , setContent ] = useState()

  useEffect(()=>{
    const fetchData = async () => {
      const res = await fetch('/api/examples/protected')
      const json = await res.json()
      if (json.content) { setContent(json.content) }
    }
    fetchData()
  },[session])

  
  if (typeof window !== 'undefined' && loading) return null

  if (!session) { return  <Layout><AccessDenied/></Layout> }

  return (
    <Layout>
      <h1>Protected Page</h1>
      <p><strong>{content || "\u00a0"}</strong></p>
    </Layout>
  )
}
