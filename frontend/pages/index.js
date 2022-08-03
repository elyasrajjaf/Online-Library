import { gql, useQuery } from "@apollo/client"
import Layout from "../components/Layout"
import FilmAccueil from "../components/FilmAccueil"

import styled from "styled-components"

const Movie = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 2fr);
    gap: 1rem;
`

const GET_MOVIES = gql`
  query getMovies {
    getMovies {
      id
      title
      author
      cover
      description
      publishedDate
      duration
    }
  }
`

export default function Index() {

  // Apollo
  const { data, loading, error } = useQuery(GET_MOVIES)
  console.log(data)

  if(loading) return 'Chargement...'

  return (
    <>
      <Layout
        page={'Accueil'}
      >
        <Movie>{data.getMovies.map( movie => (
          <FilmAccueil
            key={movie.id}
            movie={movie}
          />
        ))}</Movie>
      </Layout>
    </>
  )
}
