import Image from "next/image"
import {formaterDate} from '../helpers/index'
import styled from "styled-components"

const CardMovie = styled.div`
    padding: 2rem 1.3rem;
    background-color: white;
    border-radius: 1rem;
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
        font-size: 1.4rem;
    }
    div {
        display: flex;
        justify-content: space-between;
        p {
            color: blue;
        }

    }
`
const FilmAccueil = ({movie}) => {

    const { title, author, cover, publishedDate } = movie

    return (
        <>
            <CardMovie>
                <Image
                    layout="responsive"
                    width={30}
                    height={40}
                    src={`/assets/${cover}`}
                    alt={`Cover de film ${title}`}
                />
                <CardContent>
                    <h2>{title}</h2>
                    <div>
                        <p>{author}</p>
                        <span>{formaterDate(Number(publishedDate))}</span>
                    </div>
                </CardContent>
            </CardMovie>
        </>
        
    )
}

export default FilmAccueil