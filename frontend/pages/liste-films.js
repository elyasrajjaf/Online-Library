import Link from "next/link"
import { gql, useQuery } from "@apollo/client"
import Layout from "../components/Layout"
import styled from "styled-components"
import { formaterDate } from '../helpers/index'

const Table = styled.table`
  table-layout: auto;
  margin-top: 10px;
  width: 100%;
  thead {
    background-color: #1f2937;
    tr {
      color: white;
      th {
        width: 20%;
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
      }
      td:last-child {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #d6d3d1;
        a {
          text-decoration: none;
        }
        a:first-child {
          color: blue;
        }
        a:last-child {
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

export default function ListeFIlms() {

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
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.author}</td>
                <td>{movie.duration}</td>
                <td>{formaterDate(Number(movie.publishedDate))}</td>
                <td>
                  <Link href={'/'}><a>Modifier</a></Link>
                  <Link href={'/'}><a>Supprimer</a></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Layout>
    </>
  )
}