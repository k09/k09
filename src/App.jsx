import { useState, useRecucer, useRef, useLayoutEffect, useImperativeHandle, useContext, useEffect, useReducer, useMemo, useCallback } from 'react';
import TestTodoList from './features/test/testTodo/TestTodoList';
import './App.css'
import axios from 'axios';

export default function App() {
  const LOCAL_STORAGE_KEY = 'todoapp.todos'
  const [todos, setTodos] = useState([]);
  const todoTitleRef = useRef();
  //Persist in local storage: useEffect
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos])

  //Read from local storage: useEffect
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY).toString());
    //console.log(storedTodos);
    if (storedTodos) setTodos(storedTodos);

  }, []) //only called once

  const handleAddTodo = (e) => {
    const title = todoTitleRef.current.value;
    setTodos(prevTodos => {
      return [...prevTodos, {id: todos.length+1, title: title, complete: false}]
    })
    todoTitleRef.current.value = null;
    //todoTitleRef.setfocus();
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id);
    todo.complete = ! todo.complete;
    setTodos(newTodos);
  }

  /*
    useReducer
  */
  //!const [count, setCount] = useState(0);
  const reducer = (state, action) => {
    switch (action.type)  {
      case 'INC': return { count: state.count + 1, showText: state.showText }
      case 'TOGGLE': return { count: state.count, showText: !state.showText}
      default: return state;
    }

  }
  const [state, dispatch]  = useReducer(reducer, {count: 0, showText: true})
  const [showText, setShowText] = useState(true);
  const handleUseReducerOnClick = () => {
    //!setCount(count+1);
    //!setShowText(!showText);
    dispatch({type: 'INC'});
    dispatch({type: 'TOGGLE'});
  }

  /*
    useEffect
  */
const dataRef = useRef();
const [data, setData] = useState(null);
useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/comments').then((response) => {
    const d = response.data;
    dataRef.current.value = JSON.stringify(d);
    setData(d)
  })
}, []) //Only called once

/*
  useRef
*/
const changeTextRef = useRef();
const handleChangeTextClick = (e) => {
  e.preventDefault();
  //console.log(changeTextRef.current.value);
  changeTextRef.current.value = null;
  changeTextRef.current.focus();
}

/*
  useLayoutEffect (called before useEffect)
    Lifecycle:
    - ......
    - useLayoutEffect
    - useEffect
    - ......
*/
useEffect(() => {
  //console.log('useEffect')
}, []);
useLayoutEffect(() => {
  //console.log('useLayoutEffect')
}, []);

/*
  useImperativeHandle
  from child to parent....
  used with useRef and forwardRef function
*/
/*
  useContext
  - Context API
*/

/*
  useMemo
  - optimization
  - improve performance
*/
const findLongestName = (comments) => {
  if (!comments) return null;
  let result = '';
  for (let i = 0; i < comments.length; i++) {
    let currentName = comments[i].name;
    if (currentName.length > result.length) {
      result = currentName;
    }
  }
  console.log('Find longest name');
  return result;
}
//only run findLongestName when the data changes (useMemo)
const findLongestNameMemoized =  useMemo(() => findLongestName(data), [data]);
/*
  useCalback
  - similar to useMemo
  - memoize a function (useMemo memoizes value (returned from function))
*/
const returnComment = () => {
  return data;
}
const returnCommentCallback = useCallback(() => returnComment(), [data]);


  return (

    <>
    <section className="bg-info text-light p-5">
          <div className="container">
            <h1>useReducer.....</h1>
            <h2>{state.count}</h2>
            <button onClick={handleUseReducerOnClick}>Click.....</button>
            {state.showText && <p>This tex should show every other button click.......</p>}
          </div>
      </section>
      <section className="bg-dark text-light p-5">
          <div className="container">
          <textarea className="form-control mw-100 mh-100" ref={dataRef} />
          </div>
      </section>
      <section className="bg-info text-light p-5">
          <div className="container">
            <h1>Kiddi</h1>
            <input type="text" ref={changeTextRef} />
            <button onClick={handleChangeTextClick}>Change</button>
          </div>
      </section>
      <section className="bg-info text-light p-5">
          <div className="container">
            <div> {findLongestNameMemoized}</div>
          </div>
      </section>
    
      
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <TestTodoList todos={todos} toggleTodo={toggleTodo} />
      
      <section className="bg-dark text-light p-5">
          <div className="container">
              <input ref={todoTitleRef} type="text"></input>
              <button onClick={handleAddTodo} >+</button>
              <button>-</button>
              <div>{todos.filter(todo => !todo.complete).length} left to do</div>
          </div>
      </section>
   </>
  )
}