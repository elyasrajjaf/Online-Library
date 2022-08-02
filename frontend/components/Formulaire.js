import { useState } from "react"
import styled from "styled-components";

const Form = styled.form`
    width: 50%;
    background-color: #fff;
    padding: 3.5rem  2.2rem;
    border-radius: 2rem;
`;

const Title = styled.h1`
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

const Button = styled.input`
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

const Formulaire = () => {

    const [title, setTitle] = useState('')


    return (
        <Form>
            <Title>Ajouter un nouveau film</Title>
            <Label>
                <Input
                    id="title"
                    type="text"
                    placeholder="Titre de film"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
            </Label>
            <Label>
                <Input
                    id="author"
                    type="text"
                    placeholder="L'auteur de film"
                />
            </Label>
            <Label>
                <Text
                    id="description"
                    placeholder="Description de film"
                />
            </Label>
            <Label>
                <Input
                    id="cover"
                    type="text"
                    placeholder="Couverture de film"
                />
            </Label>
            <Label>
                <Input
                    id="duration"
                    type="number"
                    placeholder="Duration de film"
                />
            </Label>
            <Label>
                <Input
                    id="publishedDate"
                    type="date"
                />
            </Label>

            <Button
                type="submit"
                value="Ajouter le film"
            />
        </Form>
    )
}

export default Formulaire