import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Kundan K.C." />
        <p className="description">
    Bachelor In Electronics and Communication Engineering
    <br>
    Ksquarec8@gmail.com
        </p>
    <button> My Projects </button>
      </main>

      <Footer />
    </div>
  )
}
