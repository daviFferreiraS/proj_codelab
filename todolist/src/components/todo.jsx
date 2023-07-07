import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({tarefa, setar_complete, delete_tarefa, edita_tarefa}) => {
    return (
        <div className='Todo'>
            <p onClick={() => setar_complete(tarefa.id)} className={`${tarefa.completa ? 'completed' : ""}`}>
                {tarefa.tarefa}
                </p>
            <div>
                <FontAwesomeIcon icon={faPenToSquare} onClick={() => edita_tarefa(tarefa.id)}/>
                <FontAwesomeIcon icon={faTrash} onClick={() => delete_tarefa(tarefa.id)}/>
            </div>
        </div>
    );
}
 
export default Todo;