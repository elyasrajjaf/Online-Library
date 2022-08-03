import Image from "next/image"
import {formaterDate} from '../helpers/index'
import styled from "styled-components"

const CardMovie = styled.div`
    padding: 2rem;
    background-color: white;
`

const FilmAccueil = ({movie}) => {

    const { title, author, description, cover, duration, publishedDate } = movie

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
                <div>
                    <h2>{title}</h2>
                    <p>{author}</p>
                    <span>{formaterDate(Number(publishedDate))}</span>
                </div>
            </CardMovie>
        </>
        
    )
}

export default FilmAccueil