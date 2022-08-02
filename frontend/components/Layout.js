import Head from 'next/head'
import styled from "styled-components";
import Header from './Header';

const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    flex: 1;
    padding: 5rem;
    background-color: #ecf0f1;
    min-height: 100vh;
    box-sizing: border-box;
`

const Layout = ({children, page}) => {
  return (
    <>
        <Head>
            <title> OnL - {page} </title>
            <meta name="description" content="Libraire des films en ligne"/>
        </Head>

        <main>
            <Header/>
            <Container>
                <Content>
                    {children}
                </Content>
            </Container>
        </main>
    </>
  )
}

export default Layout