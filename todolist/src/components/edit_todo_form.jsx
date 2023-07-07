import React, {useState} from 'react';

const EditTodoForm = ({edita_tarefa, tarefa}) => {
    const [value, set_value] = useState("");

    const submission = e => {
        e.preventDefault(); // faz com que a página não precise recarregar na submissão

        edita_tarefa(value, tarefa.id)
        set_value("");
    }

    return (
        <form className='TodoForm' onSubmit={submission}>
            <input type="text" className='todo-input' placeholder='Atualizar Tarefa' value={value}
            onChange={ // isso aqui serve para capturar o que o usuário escreve ao longo do input
                (e) => set_value(e.target.value)
                }/>
            <button type='submit' className='todo-btn'>Atualizar</button>
        </form>
    );
}
 
export default EditTodoForm;