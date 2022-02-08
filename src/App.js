import React from 'react'
import TodoList from './Components/Todo/TodoList'
import AddTodo from './Components/Todo/AddTodo'  
import './App.css'


function App() {

	return (
		<div className='App'>
			<h2>Todo...</h2>
			<AddTodo />
			<TodoList/>
		</div>
	)
}

export default App
