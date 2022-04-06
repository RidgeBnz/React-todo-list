import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {BiTrash} from 'react-icons/bi'
import {AiOutlineEdit} from 'react-icons/ai'


function Todo({todos, completeTodo, deleteTodo, updateTodo }) {

	//States for id and value
	const [editToDo, setEditToDo] = useState({
		id:null,
		value:''
	});

	//Function  for update task
	const submitUpdate = value => {
		updateTodo(editToDo.id, value) 
		setEditToDo({
			id:null,
			value:''
		})
	}
	
	//returns the todo form
	if (editToDo.id) {
		return <TodoForm editToDo={editToDo} onSubmit={submitUpdate} />
	}

	//Maps through todo list so we can go through our array of tasks 
  return todos.map((todo, index) => (
	  //Check if the todo is completed or not,
	<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
		<div key={todo.id} onClick={() => completeTodo(todo.id)}>
			{todo.text}
		</div>

		{/* React Icons */}
		<div className="icons">
			{/*Delete task*/}
			<BiTrash onClick={() => deleteTodo(todo.id)} className='delete-icon'/>
			{/*Edit task*/}
			<AiOutlineEdit onClick={() => setEditToDo({id: todo.id, value: todo.text})} className='edit-icon'/>
		</div>

	</div>
  ))
}

export default Todo