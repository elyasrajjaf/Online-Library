import { useRouter } from "next/router"
import { useQuery, gql } from "@apollo/client"
import Layout from "../../components/Layout"
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

const GET_ONE_MOVIE = gql`
  query getMovie($movieId: ID!) {
    getMovie(movieId: $movieId) {
      title
      author
    }
  }
`

const UpdateMovie = () => {

    const router = useRouter()
    const { query: { id } } = router

    // Obtenir le film par id
    const { data } = useQuery(GET_ONE_MOVIE, {
      variables: {
        movieId: id
      }
    });

    console.log(data)
    
  
    return (
      <Layout
        page={'Modification'}
      >
        <UptdMovie>
          <Form
              // onSubmit={formik.handleSubmit}
          >
              <Titre>Modifier un film</Titre>
              <Label>
                  <Input
                      id="title"
                      type="text"
                      placeholder="Titre de film"
                      // value={formik.values.title}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                  />
              </Label>
              {/* {formik.touched.title && formik.errors.title ? (
                  <Alerte>
                      {formik.errors.title}
                  </Alerte>
              ) : null } */}
              <Label>
                  <Input
                      id="author"
                      type="text"
                      placeholder="L'auteur de film"
                      // value={formik.values.author}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                  />
              </Label>
              {/* {formik.touched.author && formik.errors.author ? (
                  <Alerte>
                      {formik.errors.author}
                  </Alerte>
              ) : null } */}
              <Label>
                  <Text
                      id="description"
                      placeholder="Description de film"
                      // value={formik.values.description}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                  />
              </Label>
              {/* {formik.touched.description && formik.errors.description ? (
                  <Alerte>
                      {formik.errors.description}
                  </Alerte>
              ) : null } */}
              <Label>
                  <Input
                      id="cover"
                      type="text"
                      placeholder="Couverture de film"
                      // value={formik.values.cover}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                  />
              </Label>
              {/* {formik.touched.cover && formik.errors.cover ? (
                  <Alerte>
                      {formik.errors.cover}
                  </Alerte>
              ) : null } */}
              <Label>
                  <Input
                      id="duration"
                      type="number"
                      placeholder="Duration de film"
                      // value={formik.values.duration}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                  />
              </Label>
              {/* {formik.touched.duration && formik.errors.duration ? (
                  <Alerte>
                      {formik.errors.duration}
                  </Alerte>
              ) : null } */}
              <Label>
                  <Input
                      id="publishedDate"
                      type="date"
                      // value={formik.values.publishedDate}
                      // onChange={formik.handleChange}
                      // onBlur={formik.handleBlur}
                  />
              </Label>
              {/* {formik.touched.publishedDate && formik.errors.publishedDate ? (
                  <Alerte>
                      {formik.errors.publishedDate}
                  </Alerte>
              ) : null } */}

              <Btn
                  type="submit"
                  value='Mettre à jour'
              />
          </Form>
        </UptdMovie>
      </Layout>
    )
}

export default UpdateMovie