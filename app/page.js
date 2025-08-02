
"use client";
import Head from 'next/head'; // ⬅️ Import Head

import { useState } from 'react';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export default function Home() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    setTodos([...todos, task]);
  };

  const deleteTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (

<>
     <Head>
        <title>My To-Do List</title> {/* ⬅️ Set the title here */}
        <meta name="description" content="A simple to-do list built with Next.js and Tailwind CSS" />
      </Head>

    <div className='container' style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
      <h1>To-Do List</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
    </>
  );
}
