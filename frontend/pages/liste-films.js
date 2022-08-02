import { gql, useQuery } from "@apollo/client"
import Layout from "../components/Layout"

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
        <table>
          <thead>
            <tr>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Durée</th>
              <th>Date de publication</th>
            </tr>
          </thead>
          <tbody>
            {data.getMovies.map( movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.author}</td>
                <td>{movie.duration}</td>
                <td>{movie.publishedDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Layout>
    </>
  )
}