import React, {useContext, useReducer } from 'react'
import classes from './AddTodo.module.css'
import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal'
import TodoContext from '../../store/todo-context'

const todoReducer = (prevState, action) => {
	if (action.type === 'TODO_TITLE') {
		return {
			todoTitle: action.value,
			date: prevState.date,
			isValid: null,
		}
	}  
	if (action.type === 'TODO_DATE') {
		return {
			todoTitle: prevState.todoTitle,
			date: action.dateValue,
			isValid: null,
		}
	}
	if(action.type === "TODO_MODAL_ON") {
		return{
			todoTitle:prevState.todoTitle,
			date:prevState.date,
			isValid: {title: "No todos or date", message: "Type something"},
		}
	};
	if(action.type === "TODO_MODAL_OFF") {
		return{
			todoTitle:prevState.todoTitle,
			date: prevState.date,
			isValid: false,
		}
	}
	return {
		todoTitle: '',
		date: '',
		isValid : null,
	}
}

const AddTodo = () => {
	const ctxData = useContext(TodoContext)
	const [todoState, dispatchTodo] = useReducer(todoReducer, {
		todoTitle: '',
		date: '',
		isValid: null,
	})

	const inputValueHandler = (event) => {
		dispatchTodo({ type: 'TODO_TITLE', value: event.target.value })
	}

	const inputDateHandler = (event) => {
		dispatchTodo({ type: 'TODO_DATE', dateValue: event.target.value })
	}

	const addTodoHandler = (event) => {
		event.preventDefault()
		
		if (todoState.todoTitle.trim().length === 0 || todoState.date.length === 0) {

			dispatchTodo({type: "TODO_MODAL_ON"})
			return
		}

		const data = {
			id: Math.random().toString(),
			title: todoState.todoTitle,
			date: todoState.date,
			completed: false,
		}

		ctxData.onGetData(data)
		
	}

	const errorHandler = (event) => {
		if (event.target.type === 'button') {
			dispatchTodo({type: 'TODO_MODAL_OFF'})
		}
		
	}

	return (
		<>
			{todoState.isValid && (
				<ErrorModal
					title={todoState.isValid.title}
					message={todoState.isValid.message}
					onConfirm={errorHandler}
				/>
			)}

			<Card className={classes.input}>
				<form onSubmit={addTodoHandler}>
					<input
						name='text'
						type='text'
						onChange={inputValueHandler}
						value ={todoState.todoTitle}
					/>
					<input
						name='date'
						type='date'
						onChange={inputDateHandler}
						value = {todoState.date}
					/>
					<Button type='submit'>Add todos</Button>
				</form>
			</Card>
		</>
	)
}

export default AddTodo
