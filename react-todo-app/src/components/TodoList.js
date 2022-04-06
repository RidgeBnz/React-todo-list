import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
	const [todos, setToDos] = useState([]); 

	const addTask = todo => {
		if(!todo.text || /^\s*$/.test(todo.text)) {
			return
		}
		
		const newToDo = [todo, ...todos]

		setToDos(newToDo);
		console.log(...todos)
	};

	const updateTodo = (todoId, newValue) => {
		if(!newValue.text || /^\s*$/.test(newValue.text)) {
			return
		} 

		setToDos(prev => prev.map(item => (item.id === todoId ? newValue: item))
		);
	};


	const deleteTodo = id => {
		const removeArray = [...todos].filter(todo => todo.id !== id)
		setToDos(removeArray);
	};

	

	const completeTodo = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				todo.isComplete = !todo.isComplete
			}
			return todo
		})
		setToDos(updatedTodos);
	};


  return (
	<div>
		<h1>What's Got You So Busy Today?</h1>
		<TodoForm onSubmit={addTask}/>
		<Todo todos={todos} completeTodo={completeTodo} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
	</div>
  )
}

export default TodoList