import Link from "next/link"
import { gql, useQuery } from "@apollo/client"
import Layout from "../components/Layout"
import Film from "../components/Film"
import styled from "styled-components"


const Table = styled.table`
  table-layout: auto;
  margin-top: 10px;
  width: 100%;
  thead {
    background-color: #1f2937;
    tr {
      color: white;
      th {
        width: 30%;
        padding: 8px 0;
        font-weight: 500;
      }
    }
  }

  tbody {
    background-color: white;
    tr {
      td {
        padding: 4px 8px;
        text-align: center;
        text-transform: uppercase;
      }
      td:last-child {
        display: flex;
        justify-content: space-around;
        align-items: center;
        button {
          text-decoration: none;
        }
        button:first-child {
          color: blue;
        }
        button:last-child {
          color: red;
        }
      }
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

export default function ListeFilms() {

  // Apollo
  const { data, loading, error } = useQuery(GET_MOVIES)
  console.log(data)

  if(loading) return 'Chargement...'

  return (
    <>
      <Layout
        page={'Liste des films'}
      >
        <Table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Durée</th>
              <th>Date de publication</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.getMovies.map( movie => (
              <Film
                key={movie.id}
                movie={movie}
              />
            ))}
          </tbody>
        </Table>
      </Layout>
    </>
  )
}