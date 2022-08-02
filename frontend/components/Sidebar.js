import Link from "next/link"
import styled from "styled-components"

const Nav = styled.aside`
    height: 100vh;
    padding: 8rem 3rem;
    margin: 10px;
    border-radius: 2rem;
    background-color: #3498db;
`

const Lien = styled.a`
    display: block;
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
    font-size: 6rem;

`

const Sidebar = () => {
  return (
    <Nav>
        <Logo>OnL</Logo>
        <nav>
            <Link
                href="/ajouter-film"
            ><Lien>Ajouter un nouveau film</Lien></Link> 
            <Link
                href="/liste-films"
            ><Lien>Liste des films</Lien></Link> 
        </nav>
    </Nav>
  )
}

export default Sidebar