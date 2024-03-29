import type { AppProps } from 'next/app'
import React from 'react'
import { Layout } from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
    )
}

export default MyApp
