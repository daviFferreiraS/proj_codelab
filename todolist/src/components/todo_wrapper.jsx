import { v4 as uuidv4 } from 'uuid';
import React, {useState} from 'react';
import TodoForm from './todo_form';
import Todo from './todo';
uuidv4();

const TodoWrapper = () => {
    const [todos, set_todos] = useState([]);

    const adiciona_tarefa = nova_tarefa => {
        // a reticências serve pra concatenar os todos anteriores ao novo adicionado
        // é como se tivesse adicionando um novo """"componente""""
        set_todos([...todos, {id: uuidv4(), tarefa: nova_tarefa, completa: false, editavel: false}])
        console.log(todos);
    }

    const setar_complete = id => { //traceja o trem quando clica nele (ver todo.jsx)
        set_todos(todos.map(tarefa => tarefa.id === id ? {...tarefa, completa: !tarefa.completa} : tarefa))
    }

    const delete_tarefa = id =>{ // filtra todos que não tem o id escolhido
       set_todos(todos.filter(tarefa => tarefa.id !== id)) 
    }

    const edita_tarefa = id => {
        set_todos(todos.map((tarefa) => tarefa.id === id ? {...tarefa, editavel: !tarefa.editavel} : tarefa))
    }

    return (
        <div className='TodoWrapper'>
            <h1>Coé Doido, faz logo!</h1>
            <TodoForm adiciona_tarefa = {adiciona_tarefa}/>
            {
                todos.map( 
                    (nova_tarefa, index) => <Todo tarefa={nova_tarefa} key= {index}
                    setar_complete= {setar_complete} delete_tarefa= {delete_tarefa}
                    edita_tarefa={edita_tarefa}/>
                )
            }
        </div>
    );
}
 
export default TodoWrapper;