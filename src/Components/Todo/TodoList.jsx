import React, { useContext } from 'react'
import TodoContext from '../../store/todo-context'
import Card from '../UI/Card'
import TodoItems from './TodoItems'
import classes from './TodoList.module.css'


const TodoList = () => {
	const ctxData = useContext(TodoContext)
	const onDeleteHandler = (event)=>{
		ctxData.setTodos([...ctxData.todos.filter(el => el.id !== event.target.id)])
   }

   const onChangeHandler = (event) =>{
	   ctxData.setTodos([...ctxData.todos.map((el)=>{
		   if(el.id === event.target.id){
			   el.completed = !el.completed
		   }
		   return el
	   })])
   }
	let todoContext = <h3 style={{ color: 'red' }}>No todos found</h3>

	if (ctxData.todos.length > 0) {
		todoContext = ctxData.todos.map((el) => {
			return (
				<TodoItems
					todo={el.title}
					key={el.id}
					id={el.id}
					date={el.date}
					onDelete={onDeleteHandler}
					onChange = {onChangeHandler}
					completed ={el.completed}
				/>
			)
		})
	}

	return (
		<Card className={classes.todos}>
			<ul>{todoContext}</ul>
		</Card>
	)
}

export default TodoList
