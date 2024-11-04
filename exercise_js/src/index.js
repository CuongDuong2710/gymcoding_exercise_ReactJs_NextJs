import React, { useCallback, useState, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Todos from './Todos'
import Component1 from './useContext/Component1';
import ComponentA from './useRef/ComponentA';
import ComponentB from './useRef/ComponentB';
import ComponentC from './useRef/ComponentC';

const App = () => {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  // useMemo(factory: () => any, deps: React.DependencyList): any
  // useMemo will only recompute the memoized value when one of the deps has changed.
  // the expensive function will only run when count is changed and not when todo's are added.
  const calculation = useMemo(() => expensiveCalculation(count), [count]) 

  const increment = () => {
    setCount((c) => c + 1)
  }

  // (alias) useCallback<() => void>(callback: () => void, deps: React.DependencyList): () => void
  // useCallback will return a memoized version of the callback that only changes if one of the inputs has changed.
  // Use the useCallback Hook to prevent the Todos component from re-rendering needlessly (when click increment). It's only
  // re-render when `todos` changes
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, 'New Todo'])
  }, [todos])

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </>
  )
}

const expensiveCalculation = (num) => {
  console.log('Calculating...')
  for (let i = 0; i < 1000000000; i++) {
    num += 1
  }
  return num
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ComponentC />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* 
Try running this and click the count increment button.

You will notice that the Todos component re-renders even when the todos do not change. 

Why does this not work? We are using memo, so the Todos component should not re-render since neither the todos state 
nor the addTodo function are changing when the count is incremented.

This is because of something called "referential equality".

Every time a component re-renders, its functions get recreated. Because of this, the addTodo function has actually changed.*/


/* 
To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.

Use the useCallback Hook to prevent the Todos component from re-rendering needlessly

*/
