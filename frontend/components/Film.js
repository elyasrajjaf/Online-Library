import { formaterDate } from '../helpers/index'
import Swal from "sweetalert2"
import { gql, useMutation } from '@apollo/client'
import Router from 'next/router'

const DELETE_MOVIE = gql`
    mutation deleteMovie($id: ID!) {
        deleteMovie(id: $id)
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

const Film = ({movie}) => {

    // Mutation pour supprimer film
    const [ deleteMovie ] = useMutation(DELETE_MOVIE, {
        update(cache) {
            const { getMovies } = cache.readQuery({ query: GET_MOVIES })

            cache.writeQuery({
                query: GET_MOVIES,
                data: {
                    getMovies: getMovies.filter( currentMovie => currentMovie.id !== id )
                }
            })
        }
    })

   const { id, title, author, duration, publishedDate } = movie
    
    // Supprimer un film
    const confirmerSuppression = () => {
        Swal.fire({
            title: `Voulez-vous vraiment supprimer ce film "${title}"?`,
            text: "Vous ne pourrez pas revenir en arrière !",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Oui, supprimez-le!',
            cancelButtonText: 'Non, annulez-le'
          }).then( async (result) => {
            if (result.isConfirmed) {
                
                try {
                    // Supprimer film
                    const { data } = await deleteMovie({
                        variables: {
                            id
                        }
                    })

                    console.log(data)


                    Swal.fire(
                        'Supprimé!',
                        data.deleteMovie,
                        'success'
                      )
                } catch (error) {
                    console.log(error)
                }
              
            }
          })
    }

    const modifierFilm = () => {
        Router.push({
            pathname: "/modifierfilm/[id]",
            query: { id }
        })
    }


    return (
        <tr>
            <td>{title}</td>
            <td>{author}</td>
            <td>{duration} minutes</td>
            <td>{formaterDate(Number(publishedDate))}</td>
            <td>
                <button
                    type="button"
                    onClick={() => modifierFilm()}
                >Modifier</button>
                <button
                    type="button"
                    onClick={() => confirmerSuppression()}
                >Supprimer</button>
            </td>
        </tr>
    )
}

export default Film