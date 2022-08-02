import Link from "next/link"
import styled from "styled-components"

const Nav = styled.aside`
    padding: 0.5rem 1rem;
    background-color: #3498db;
`
const Container = styled.main`
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Lien = styled.a`
    padding: 0.6rem;
    margin-bottom: 5px;
    transition: 0.4s ease;
    color: white;
    :hover {
        color: #ecf0f1;
        cursor: pointer;
    }
`

const Logo = styled.span`
    font-size: 2rem;
    color: white;

`

const Header = () => {
  return (
    <Nav>
        <Container>
                <Logo>OnL</Logo>
            <nav>
                <Link
                    href="/ajouter-film"
                ><Lien>Ajouter un nouveau film</Lien></Link> 
                <Link
                    href="/liste-films"
                ><Lien>Liste des films</Lien></Link> 
            </nav>

        </Container>
    </Nav>
  )
}

export default Header