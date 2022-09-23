import { useEffect, useState } from 'react'

import Input from '../Form/Input'
import Select from '../Form/Select'
import SubmitButton from '../Form/SubmitButton'

import style from './ProjectForm.module.css'

function ProjectForm({ btnText }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <form className={style.form}>
            <Input
                type='text'
                text='Nome do projeto'
                name='name'
                placeholder='Insira o nome do projeto'
            />
            <Input
                type='number'
                text='Orçamento do projeto'
                name='budget'
                placeholder='Insira o nome orçamento total'
            />
            <Select
                name='category_ig'
                text='Selecione a categoria'
                options={categories}
            />
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm