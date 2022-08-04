import Image from "next/image"
import Router from "next/router"

import styled from "styled-components"

const CardMovie = styled.div`
    padding: 0.8rem;
    transition: 0.2s;
    :hover {
        cursor: pointer;
        border-bottom: 1px solid blue;
    }
`
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    h2 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        margin-top: 1.2rem;
        font-weight: 500;
        text-transform: capitalize;
        font-size: 1.2rem;
    }
    div {
        display: flex;
        justify-content: space-between;
        p {
            color: gray;
        }

    }
`
const Btn = styled.button`
    all: unset;
`

const FilmAccueil = ({movie}) => {

    const { id, title, author, cover, publishedDate } = movie

    const voirFilm = () => {
        Router.push({
            pathname: "/voir-film/[id]",
            query: { id }
        })
    }

    return (
        <>
            <Btn
                type="button"
                onClick={() => voirFilm()}
            >
                <CardMovie>
                    <Image
                        style={{ borderRadius: '0.7rem'}}
                        layout="responsive"
                        width={28}
                        height={40}
                        src={`/assets/${cover}`}
                        alt={`Cover de film ${title}`}
                    />
                    <CardContent>
                        <h2>{title}</h2>
                    </CardContent>
                </CardMovie>
            </Btn>
        </>
        
    )
}

export default FilmAccueil