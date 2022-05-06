import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function About() {
  
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />

      <h1>about</h1>
    </div>
  )
}