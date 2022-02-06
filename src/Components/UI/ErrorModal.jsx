import React from 'react'
import Button from './Button'
import Card from './Card'
import classes from './ErrorModal.module.css'
import ReactDOM from 'react-dom';

const BackDrop = (props) => {
	return <div className={classes.backdrop} onClick={props.onConfirm} />
}

const ModalOverLay = (props) => {
	return (
		<Card className={classes.modal}>
			<header className={classes.header}>
				<h2>{props.title}</h2>
			</header>
			<main className={classes.content}>
				<p>{props.message}</p>
			</main>
			<footer className={classes.actions}>
				<Button onClick={props.onConfirm}>OK</Button>
				{props.children}
			</footer>
		</Card>
	)
}
const ErrorModal = (props) => {
	return (
		<> 
      {ReactDOM.createPortal(
        <BackDrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root'),
      )}
			{ReactDOM.createPortal(
        	<ModalOverLay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
          children = {props.children}
        />,
        document.getElementById('modal-root')
      )}
		
		</>
	)
}

export default ErrorModal
