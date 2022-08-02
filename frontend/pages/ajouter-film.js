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
const GET_MOVIES = gql`
  query getMovies {
    getMovies {
      id
      title
      author
      publishedDate
      duration
    }
  }
`

export default function AjouterFilm() {

  // Créer un nouveau film

  const [ newMovie ] = useMutation(NEW_MOVIE, {
    update(cache, { data: { newMovie }}) {
      const { getMovies } = cache.readQuery({ query: GET_MOVIES })

      cache.writeQuery({
        query: GET_MOVIES,
        data: {
          getMovies: [...getMovies, newMovie]
        }
      })
    }
  })

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