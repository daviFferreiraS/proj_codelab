import './App.css';
import TodoWrapper from './components/todo_wrapper';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Access from './components/access';
import { useState } from 'react';

function App() {
  const [todos, set_todos] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Access/>}/>
          <Route path='/:user' element={<TodoWrapper todos={todos} set_todos={set_todos}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
