import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className='min-h-screen'>
      <Navbar />

      <Component {...pageProps} />

      <Footer />
    </main>
  )
}
