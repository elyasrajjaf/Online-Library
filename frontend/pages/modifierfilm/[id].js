import { useRouter } from "next/router"
import { gql, useQuery, useMutation } from "@apollo/client"
import Layout from "../../components/Layout"
import { Formik } from 'formik'
import * as Yup from 'yup'
import Swal from "sweetalert2"
import { dateFormat } from "../../helpers"
import styled from "styled-components";

const UptdMovie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    width: 50%;
    background-color: #fff;
    padding: 3.5rem  2.2rem;
    border-radius: 2rem;
    box-sizing: border-box;
`;

const Titre = styled.h1`
    margin-bottom: 2rem;
    font-size: 2.2rem;
    font-weight: 500;
`

const Input = styled.input`
    all: unset;
    width: 100%;
    padding: 14px 10px;
    background-color: #ecf0f1;
    border-radius: 0.5rem;
    box-sizing: border-box;
`

const Btn = styled.input`
    all: unset;
    padding: 14px 10px;
    background-color: blue;
    color: white;
    width: 100%;
    border-radius: 0.5rem;
    text-align: center;
    box-sizing: border-box;
    margin-top: 5px;
`

const Text = styled.textarea`
    all: unset;
    width: 100%;
    padding: 14px 10px;
    background-color: #ecf0f1;
    border-radius: 0.5rem;
    box-sizing: border-box;
`
const Label = styled.div`
    margin-bottom: 0.7rem;
`
const Alerte = styled.p`
    padding-left: 5px;
    width: 100%;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: #f86f6f;
`
const Message = styled.p`
    padding-left: 5px;
    width: 100%;
    margin-bottom: 1rem;
    font-size: 1rem;
    color: blue;
`

const GET_MOVIE = gql`
    query getMovie($id: ID!) {
        getMovie(id: $id) {
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
const UPDATE_MOVIE = gql`
    mutation updateMovie($id: ID!, $input: MovieInput) {
        updateMovie(id: $id, input: $input) {
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


const UpdateMovie = () => {

    const router = useRouter();
    const { query: { id } } = router;

    // Obtenir le film par id
    const { data, loading, error } = useQuery(GET_MOVIE, {
        variables: {
            id
      }
    });

    const [ updateMovie ] = useMutation(UPDATE_MOVIE)

        
    const schemaValidation = Yup.object({
        title: Yup.string()
                  .required('Le titre est obligatoire'),
        author: Yup.string()
                   .required("Le nom d'auteur est obligatoire"),
        description: Yup.string()
                        .required('La description est obligatoire')
                        .min(20, 'Vous devez écirer au moins 20 caractéres'),
        cover: Yup.string()
                  .required('Une couverture de film est requise'),
        duration: Yup.number()
                     .required('La duration de film est obligatoire'),
        publishedDate: Yup.string()
                          .required('Une date de publication est requise')
    })
  
    if(loading) return 'Chargement...'

    const { getMovie } = data

    // Modifier le film dans la base de données
    const modificationFilm = async values => {
        const { title, author, description, cover, duration, publishedDate } = values

        try {
            const { data } = await updateMovie({
                variables: {
                    id,
                    input: {
                        title, 
                        author, 
                        description, 
                        cover, 
                        duration, 
                        publishedDate
                    }
                }
            })
            console.log(data)
            
            Swal.fire(
                'Modifié!',
                'Le film à été modifié avec succès!',
                'success'
            )

            setTimeout(() => {
                router.push('/liste-films')
            }, 3000)

        } catch (error) {
            console.log(error)
        }
    }

    return (
      <Layout
        page={'Modification'}
      >
        <UptdMovie>
          <Formik
            validationSchema={schemaValidation}
            enableReinitialize
            initialValues={ getMovie }
            onSubmit={ (values) => {
                modificationFilm(values)
            }}
          >
            {props => {
                //console.log(props)
                return(
                    
                <Form
                    onSubmit={props.handleSubmit}
                >
                    <Titre>Modifier un film</Titre>
                    <Label>
                        <Input
                            id="title"
                            type="text"
                            placeholder="Titre de film"
                            value={props.values.title}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                    </Label>
                    {props.touched.title && props.errors.title ? (
                        <Alerte>
                            {props.errors.title}
                        </Alerte>
                    ) : null }
                    <Label>
                        <Input
                            id="author"
                            type="text"
                            placeholder="L'auteur de film"
                            value={props.values.author}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                    </Label>
                    {props.touched.author && props.errors.author ? (
                        <Alerte>
                            {props.errors.author}
                        </Alerte>
                    ) : null }
                    <Label>
                        <Text
                            id="description"
                            placeholder="Description de film"
                            value={props.values.description}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                    </Label>
                    {props.touched.description && props.errors.description ? (
                        <Alerte>
                            {props.errors.description}
                        </Alerte>
                    ) : null }
                    <Label>
                        <Input
                            id="cover"
                            type="text"
                            placeholder="Couverture de film"
                            value={props.values.cover}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                    </Label>
                    {props.touched.cover && props.errors.cover ? (
                        <Alerte>
                            {props.errors.cover}
                        </Alerte>
                    ) : null }
                    <Label>
                        <Input
                            id="duration"
                            type="number"
                            placeholder="Duration de film"
                            value={props.values.duration}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                    </Label>
                    {props.touched.duration && props.errors.duration ? (
                        <Alerte>
                            {props.errors.duration}
                        </Alerte>
                    ) : null }
                    <Label>
                        <Input
                            id="publishedDate"
                            type="date"
                            value={props.publishedDate}
                            // value={dateFormat(Number(props.values.publishedDate))}
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                        />
                    </Label>
                    {props.touched.publishedDate && props.errors.publishedDate ? (
                        <Alerte>
                            {props.errors.publishedDate}
                        </Alerte>
                    ) : null }

                    <Btn
                        type="submit"
                        value='Mettre à jour'
                    />
                </Form>
                )
            }}
          </Formik>
        </UptdMovie>
      </Layout>
    )
}

export default UpdateMovie