import Head from 'next/head'

import AdminNavBar from '../../components/AdminNavBar'
import Card from '../../components/Card';

export default function Projects() {
  
  return (
    <div>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AdminNavBar />
      <h1>Projects</h1>
      
    </div>
  )
}