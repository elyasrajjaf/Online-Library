import Head from 'next/head'

const Layout = ({children, page}) => {
  return (
    <>
        <Head>
            <title> OnL - {page} </title>
            <meta name="description" content="Libraire des films en ligne"/>
        </Head>

        <main>
            {children}
        </main>
    </>
  )
}

export default Layout