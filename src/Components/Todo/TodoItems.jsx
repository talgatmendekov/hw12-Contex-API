import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import 'animate.css'

const StyledLi = styled.li`
	& {
		display: flex;
		justify-content: space-between;
	}
	& button {
		width: 100px;
		height: 30px;
		margin-bottom: 5px;
	}

	& .block {
		width: 50%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	& .done {
		text-decoration: line-through;
		color: red;
	}
	& input {
		margin-left: 10px;
	}
`
// className={props.completed ? 'done' : ''}
const TodoItems = (props) => {
	return (
		<StyledLi className="animate__animated animate__lightSpeedInRight">
			<div className='block'>
				<input
					type='checkbox'
					id={props.id}
					onChange={props.onChange}
					checked={props.completed}
				/>
				<strong className={props.completed ? 'done' : ''}>{props.todo}</strong>
				<div className={props.completed ? 'done' : ''}>
					{props.date}
				</div>
			</div>

			<Button onClick={props.onDelete} id={props.id}>
				delete
			</Button>
		</StyledLi>
	)
}

export default TodoItems
