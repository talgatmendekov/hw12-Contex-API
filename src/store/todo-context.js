import React, { useEffect, useState } from 'react'

const TodoContext = React.createContext({
	todos: [],
	setTodos: () => {},
	onGetData: () => {},
})

export const TodoContextProvider = (props) => {
	useEffect(() => {
		// хук useEffect нам нужен для тех действий которые не входят в рутину React.
		// Действия которые не входят в рутину это все действия кроме оценки, переоценки, отрисовки(ренодоринга) перерисовки (ре-рендоринга)
		// Например: запрос с сервера, хранение данных в локальное хранилище это все относится к "side-effect'ам", так как мы наверника не знаем как это может повлиять на рутину React.
		let localdata = JSON.parse(localStorage.getItem('key'))
		setTodos(localdata ? [...localdata] : [])
	}, [])
	const [todos, setTodos] = useState([])

	useEffect(() => {
		localStorage.setItem('key', JSON.stringify(todos))
	}, [todos])

	const getDataHandler = (todoData) => {
		setTodos([...todos, todoData])
	}

	return (
		<TodoContext.Provider
			value={{
				todos: todos,
				setTodos: setTodos,
				onGetData: getDataHandler,
			}}
		>
			{props.children}
		</TodoContext.Provider>
	)
}
export default TodoContext
