import React, {useState} from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {

	//Sates for tasks and passes an array
	const [todos, setToDos] = useState([]); 

	//Function for adding a Task to the list
	const addTask = todo => {

		//code for if user doesn't type in letter it will not show up.
		if(!todo.text || /^\s*$/.test(todo.text)) {
			return
		}
		
		//Function set to an array, and spread todos
		const newToDo = [todo, ...todos]
		setToDos(newToDo);
		console.log(...todos)
	};

	//Function for updating todo
	const updateTodo = (todoId, newValue) => {
		if(!newValue.text || /^\s*$/.test(newValue.text)) {
			return
		} 

		//Updating the state of Tasks
		setToDos(prev => prev.map(item => (item.id === todoId ? newValue: item))
		);
	};

	//Function for deleting 
	const deleteTodo = id => {
		//Check in the array the todo then will remove it
		const removeArray = [...todos].filter(todo => todo.id !== id)
		setToDos(removeArray);
	};

	
	//Function for completing to do
	const completeTodo = id => {
		let updatedTodos = todos.map(todo => {
			if (todo.id === id) {
				//toggles between true and false
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