import { useMutation, gql } from '@apollo/client'
import styled from "styled-components"
import Layout from "../components/Layout"
import Formulaire from "../components/Formulaire"

const UpMovie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const UPDATE_MOVIE = gql`
    mutation updateMovie($id: ID!, $input: MovieInput, $updateMovieId: ID!) {
        updateMovie(id: $id, input: $input) {
        id
        title
        author
        description
        publishedDate
        duration
        }
    }
`

export default function AjouterFilm() {

  // Créer un nouveau film

  const [ updateMovie ] = useMutation(UPDATE_MOVIE)

  return (
    <>
      <Layout
        page={'Ajouter un film'}
        >
        <UpMovie>
            <Formulaire
              updateMovie={updateMovie}
            />
        </UpMovie>
      </Layout>
    </>
  )
}