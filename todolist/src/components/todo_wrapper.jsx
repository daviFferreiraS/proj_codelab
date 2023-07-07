import { v4 as uuidv4 } from 'uuid';
import React, {useState} from 'react';
import TodoForm from './todo_form';
import Todo from './todo';
import EditTodoForm from './edit_todo_form';
import { useNavigate, useParams } from 'react-router-dom';
uuidv4();

const TodoWrapper = ({todos, set_todos}) => {
    const {user} = useParams();
    const navigate = useNavigate();

    const adiciona_tarefa = nova_tarefa => {
        // a reticências serve pra concatenar os todos anteriores ao novo adicionado
        // é como se tivesse adicionando um novo """"componente""""
        set_todos([...todos, {id: uuidv4(), tarefa: nova_tarefa, completa: false, editavel: false, user: user}])
        console.log(todos);
    }

    const setar_complete = id => { //traceja o trem quando clica nele (ver todo.jsx)
        set_todos(todos.map(tarefa => tarefa.id === id ? {...tarefa, completa: !tarefa.completa} : tarefa))
    }

    const delete_tarefa = id =>{ // filtra todos que não tem o id escolhido
       set_todos(todos.filter(tarefa => tarefa.id !== id)) 
    }

    const tarefa_editavel = id => {
        set_todos(todos.map((tarefa) => tarefa.id === id ? {...tarefa, editavel: !tarefa.editavel} : tarefa))
    }

    const edita_tarefa = (tarefa, id) => {
        set_todos(todos.map(todo => todo.id === id ? 
            {...todo, tarefa, editavel: !todo.editavel} : todo))
    }

    const onClickReturn = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <>
            <div className='TodoWrapper'>
                <h1>Lista do {user}</h1>
                <TodoForm adiciona_tarefa = {adiciona_tarefa}/>
                {
                    todos.filter(nova_tarefa => nova_tarefa.user === user).map( 
                        (nova_tarefa, index) => nova_tarefa.editavel ? 
                        (<EditTodoForm edita_tarefa={edita_tarefa} tarefa={nova_tarefa}/>) : 
                        (<Todo tarefa={nova_tarefa} key= {index}
                            setar_complete= {setar_complete} delete_tarefa= {delete_tarefa}
                            edita_tarefa={tarefa_editavel}/>)
                    )             
                }
            </div>
            <button className='return-btn' onClick={onClickReturn}>Voltar</button>
        </>
    );
}
 
export default TodoWrapper;