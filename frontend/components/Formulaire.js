import { useFormik } from "formik"
import * as Yup from "yup"
import styled from "styled-components";


const Form = styled.form`
    width: 50%;
    background-color: #fff;
    padding: 3.5rem  2.2rem;
    border-radius: 2rem;
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

const Formulaire = () => {


    // Validation de formulaire
    const formik = useFormik({
        initialValues: {
            title: 'Hello',
            author: '',
            description: '',
            cover: '',
            duration: '',
            publishedDate: ''
        },
        onSubmit: valeurs => {
            console.log('Enviando...')
            console.log(valeurs)
        }
    })


    return (
        <Form
            onSubmit={formik.handleSubmit}
        >
            <Titre>Ajouter un nouveau film</Titre>
            <Label>
                <Input
                    id="title"
                    type="text"
                    placeholder="Titre de film"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                />
            </Label>
            <Label>
                <Input
                    id="author"
                    type="text"
                    placeholder="L'auteur de film"
                    value={formik.values.author}
                    onChange={formik.handleChange}
                />
            </Label>
            <Label>
                <Text
                    id="description"
                    placeholder="Description de film"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                />
            </Label>
            <Label>
                <Input
                    id="cover"
                    type="text"
                    placeholder="Couverture de film"
                    value={formik.values.cover}
                    onChange={formik.handleChange}
                />
            </Label>
            <Label>
                <Input
                    id="duration"
                    type="number"
                    placeholder="Duration de film"
                    value={formik.values.duration}
                    onChange={formik.handleChange}
                />
            </Label>
            <Label>
                <Input
                    id="publishedDate"
                    type="date"
                    value={formik.values.publishedDate}
                    onChange={formik.handleChange}
                />
            </Label>

            <Btn
                type="submit"
                value="Ajouter le film"
            />
        </Form>
    )
}

export default Formulaire