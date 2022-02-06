import Card from '../UI/Card'
import TodoItems from './TodoItems'
import classes from './TodoList.module.css'


const TodoList = (props) => {
	const onDeleteHandler = (event)=>{
		props.setTodos([...props.todos.filter(el => el.id !== event.target.id)])
   }

   const onChangeHandler = (event) =>{
	   props.setTodos([...props.todos.map((el)=>{
		   if(el.id === event.target.id){
			   el.completed = !el.completed
		   }
		   return el
	   })])
   }
	let todoContext = <h3 style={{ color: 'red' }}>No todos found</h3>

	if (props.todos.length > 0) {
		todoContext = props.todos.map((el) => {
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
