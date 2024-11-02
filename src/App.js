import React, { useState } from 'react'
import Register from './components/Register';
import List from './components/List';

const App = () => {
  const [todoForList, setTodoForList] = useState({});
  const [todoForRegist, setTodoForRegist] = useState({});
  const handleRegister = (event, todo) => {
    event.preventDefault();
    setTodoForList(todo);

  }

  const sendRegister = (todo) => {
    setTodoForRegist(todo);
  }

  return (
    <React.Fragment>

      <div>TODOアプリです</div>
      <div>
        <Register onSubmit={handleRegister} loadTodo={todoForRegist} />
      </div>
      <div style={{ marginTop: '100px' }}>
        <List todoData={todoForList} sendRegister={sendRegister} />
      </div>
    </React.Fragment>
  )
}

export default App;
