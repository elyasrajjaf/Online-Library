import styled from "styled-components"
import Layout from "../components/Layout"
import Formulaire from "../components/Formulaire"

const AddMovie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function AjouterFilm() {
  return (
    <>
      <Layout
        page={'Ajouter un film'}
        >
        <AddMovie>
            <Formulaire/>
        </AddMovie>
      </Layout>
    </>
  )
}