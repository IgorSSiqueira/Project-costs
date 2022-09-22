import Input from '../Form/Input'
import Select from '../Form/Select'

import style from './ProjectForm.module.css'

function ProjectForm() {
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
            <Select name='category_ig' text='Selecione a categoria' />
            <div>
                <input type='submit' value='Criar projeto' />
            </div>
        </form>
    )
}

export default ProjectForm