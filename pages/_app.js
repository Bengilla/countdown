import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <body className='bg-gray-200'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </body>
  )
}

export default MyApp
