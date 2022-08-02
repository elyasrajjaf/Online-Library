import Head from 'next/head'
import styled from "styled-components";

import Sidebar from './Sidebar';

const Container = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
`
const Content = styled.div`
    flex: 1;
    padding: 3rem 4rem;
    background-color: #ecf0f1;
    height: 100vh;
    border-radius: 2rem;
`

const Layout = ({children, page}) => {
  return (
    <>
        <Head>
            <title> OnL - {page} </title>
            <meta name="description" content="Libraire des films en ligne"/>
        </Head>

        <main>
            <Container>
                <Sidebar/>
                <Content>
                    {children}
                </Content>
            </Container>
        </main>
    </>
  )
}

export default Layout