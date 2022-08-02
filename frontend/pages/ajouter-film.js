import { useMutation, gql } from '@apollo/client'
import styled from "styled-components"
import Layout from "../components/Layout"
import Formulaire from "../components/Formulaire"

const AddMovie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const NEW_MOVIE = gql`
  mutation newMovie($input: MovieInput) {
    newMovie (input: $input){
        id
        title
        author
        description
        cover
        duration
        publishedDate 
    }
  }
`

export default function AjouterFilm() {

  // Créer un nouveau film

  const [ newMovie ] = useMutation(NEW_MOVIE)

  return (
    <>
      <Layout
        page={'Ajouter un film'}
        >
        <AddMovie>
            <Formulaire
              newMovie={newMovie}
            />
        </AddMovie>
      </Layout>
    </>
  )
}