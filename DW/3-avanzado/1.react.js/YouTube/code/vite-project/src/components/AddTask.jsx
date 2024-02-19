import { useState } from "react";

const AddTask = ({ addTask }) => {
  const [input, setInput] = useState("");

  const inputChange = (event) => {
    setInput(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    /* 
		addTask en igual a setArray que ya trae tareas previas 
		AddTask is equal to setArray which already brings previous tasks. 👀👇

		addTask((tasks) => [...tasks, send]);
		*/
    addTask(input);
  };

  return (
    <form action="" onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Enter a new task"
        value={input}
        onChange={inputChange}
      />
    </form>
  );
};

export { AddTask };

/* rafc */
