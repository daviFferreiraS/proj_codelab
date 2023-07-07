import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Access = () => {
    const [user, setUser] = useState("");

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        navigate('/' + user);
    }

    return (
        <div className="access-container">
            <h1>Acessar Lista</h1>
            <form className="access-form" onSubmit={onSubmit}>
                <input type="text" className='todo-input' onChange={(e) => setUser(e.target.value)}/>
                <button className='todo-btn'>Acessar</button>
            </form>
        </div>
    );
}
 
export default Access;