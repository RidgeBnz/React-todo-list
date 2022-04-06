import React, {useState} from 'react'
import TodoForm from './TodoForm'
import {BiTrash} from 'react-icons/bi'
import {AiOutlineEdit} from 'react-icons/ai'


function Todo({todos, completeTodo, deleteTodo, updateTodo }) {
	const [editToDo, setEditToDo] = useState({
		id:null,
		value:''
	});

	const submitUpdate = value => {
		updateTodo(editToDo.id, value) 
		setEditToDo({
			id:null,
			value:''
		})
	}

	if (editToDo.id) {
		return <TodoForm editToDo={editToDo} onSubmit={submitUpdate} />
	}

  return todos.map((todo, index) => (
	<div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
		<div key={todo.id} onClick={() => completeTodo(todo.id)}>
			{todo.text}
		</div>
		<div className="icons">
			<BiTrash
			onClick={() => deleteTodo(todo.id)} className='delete-icon'/>
			<AiOutlineEdit onClick={() => setEditToDo({id: todo.id, value: todo.text})} className='edit-icon'/>
		</div>

	</div>
  ))
}

export default Todo