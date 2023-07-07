import React, {useState} from 'react';

const TodoForm = ({adiciona_tarefa}) => {
    const [value, set_value] = useState("");

    const submission = e => {
        e.preventDefault(); // faz com que a página não precise recarregar na submissão

        adiciona_tarefa(value)
        set_value("");
    }

    return (
        <form className='TodoForm' onSubmit={submission}>
            <input type="text" className='todo-input' placeholder='Vai fazer o que?' value={value}
            onChange={ // isso aqui serve para capturar o que o usuário escreve ao longo do input
                (e) => set_value(e.target.value)
                }/>
            <button type='submit' className='todo-btn'>Bota</button>
        </form>
    );
}
 
export default TodoForm;