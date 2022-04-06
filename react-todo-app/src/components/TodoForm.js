import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
//If you set this to an empty string 
//and try to edit it wil clear the input and make it an empty string
const [input, setInput] = useState(props.editToDo ? props.editToDo.value : '');

const inputRef = useRef(null);

//Allows you to focus on what ever you put ref on in this case the form input
useEffect(() => {
	inputRef.current.focus()
})


const handleChange = e => {
	setInput(e.target.value);
}

const handleSubmit = e => {
	e.preventDefault();
	props.onSubmit({
		id: Math.floor(Math.random() * 10000),
		text: input
	});

	// This makes it so that when you add something 
	// in the input field and click on the add todo button it clears the field
	setInput('');
}

  return (
	<form className="form-todo" onSubmit={handleSubmit}>
		{props.editToDo ? ( 
		<>
		<input type="text" 
		placeholder="Update Item" 
		value={input} 
		name='text' 
		className="input-todo edit"
		onChange={handleChange}
		ref={inputRef}/>
		<button className="button-todo edit">Update</button>
		</>
		) : ( 
		<>
		<input type="text" 
		placeholder="Add a Task" 
		value={input} 
		name='text' 
		className="input-todo"
		onChange={handleChange}
		ref={inputRef}/>
		<button className="button-todo">Add Task</button>
		</>
		)}
	</form>
  )
}

export default TodoForm
