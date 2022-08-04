import { useState } from "react"
import { gql, useQuery } from "@apollo/client"
import Layout from "../components/Layout"
import FilmAccueil from "../components/FilmAccueil"

import styled from "styled-components"

const Movie = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 2fr);
    gap: 1rem;
`
const Search = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 2rem;
    padding: 12px 18rem;
    input:first-child {
      all: unset;
      flex: 1;
      margin-right: 1rem;
      border-radius: 0.5rem;
      background-color: #fff;
      padding: 12px 14px;
    }
    button:last-child {
      all: unset;
      cursor: pointer;
      border-radius: 0.5rem;
      color: white;
      padding: 12px 14px;
      transition: 0.4s ease;
      background-color: #3b82f6;
          :hover {
            background-color: #1e40af;
          }
    }
`
const Titre = styled.h1`
  font-weight: 600;
  padding: 1rem;
  margin-bottom: 1.5rem;
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
const SEARCH_MOVIE = gql`
  query searchMovie($text: String!) {
    searchMovie(text: $text) {
      title
      author
    }
  }
`

export default function Index() {

  // Apollo
  const { data, loading, error } = useQuery(GET_MOVIES)
  // console.log(error)

  if(loading) return 'Chargement...'

  return (
    <>
      <Layout
        page={'Accueil'}
      >
        <Search
        
        >
          <input
            type='search'
            placeholder="Rechercher film..."
          />
          <button
            type="submit"
          >Rechercher</button>
        </Search>
        <Titre>Films Anime Disponible</Titre>
          <Movie>{data.getMovies.map( movie => (
            <FilmAccueil
              key={movie.id}
              movie={movie}
            />
        ))}
          </Movie>
      </Layout>
    </>
  )
}
