import Image from "next/image"
import { useRouter } from "next/router"
import { gql, useQuery } from "@apollo/client"
import {formaterDate} from '../../helpers/index'
import Layout from "../../components/Layout"
import styled from "styled-components";

const Titre = styled.h2`
    margin-bottom: 3rem;
    font-size: 3rem;
`
const CardMovie = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 2fr);
    gap: 1rem ;
`
const Img = styled.div`
    max-width: 100%;
`
const Content = styled.div`
        margin: 2rem 1rem;
    span {
        font-weight: 500;
        color: gray;
        padding-left: 5px;
    }
    h3 {
        margin-bottom: 0.4rem;
        font-size: 1.2rem;
    }
    h5 {
        margin-bottom: 0.4rem;
        font-size: 1rem;
        font-weight: 600;
    }
    h6 {
        margin-bottom: 0.4rem;
        font-size: 1rem;
        font-weight: 600;
    }
    p {
        color: gray;
        font-size: 1.2rem;
        span {
            color: black;
            padding: 0;
            font-size: 1.3rem;
            font-weight: 700;
        }
    }
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

const PreviewMovie = () => {

    const router = useRouter();
    const { query: { id } } = router;

    // Obtenir le film par id
    const { data, loading, error } = useQuery(GET_MOVIE, {
        variables: {
            id
      }
    });
    
    if(loading) return 'Chargement...'
    
    const { getMovie } = data
    const { title, author, description, cover, duration, publishedDate } = getMovie

    return (
        <Layout
            page={`${title}`}
        >
            <div>
                <Titre>{title}</Titre>
                <CardMovie>
                    <Img>
                        <Image
                            layout="responsive"
                            width={30}
                            height={40}
                            src={`/assets/${cover}`}
                            alt={`Cover de film ${title}`}
                        />
                    </Img>
                    <Content>
                        <h3>Réalisateur: <span>{author}</span></h3>
                        <h5>Durée: <span>{duration} minutes</span></h5>
                        <h6>Date de sortie: <span>{formaterDate(publishedDate)}</span></h6>
                        <p><span>Synopsis:</span> {description}</p>
                    </Content>
                </CardMovie>
            </div>
        </Layout>
    )
}

export default PreviewMovie