import './App.css';
import TodoInsert from './components/TodoInsert';
import {useCallback, useRef, useState} from 'react';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function App() {

 
    const [todos, setTodos] = useState([
      {
        id: 1,
      text: '운동하기',
      checked: true,
      },
      {
        id: 2,
      text: '요리하기',
      checked: true,
      },
      {
        id: 3,
      text: '학원가기',
      checked: false,
      }
    ]);

    const nextId = useRef(4);
    console.log(nextId);

    const onInsert = useCallback( (value) => {
    const todo = {
      id: nextId.current,
      text: value,
      checked: false,
    }
    setTodos(todos.concat(todo));
    nextId.current += 1;
  },[todos])

  const onToggle = useCallback( (id) => {
    setTodos(todos.map(todo=>todo.id === id ? {...todo, checked: !todo.checked} : todo)) // ...스프라이트 연산자, todo객체의 속성들을 가져오는 것. 그래서 ...todo 속성값을 가져오라고 하는 것.
  },[todos])

  const onRemove = useCallback( (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  },[todos])
  
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}/>
      <TodoList todos={todos} onToggle={onToggle}onRemove={onRemove}/>
    </TodoTemplate>
  );
  }

export default App;
