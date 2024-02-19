import { useState } from "react";
import { AddTask } from "./components/AddTask";

const Items = ({ title, completed }) => {
  return (
    <>
      <li>
        {title}
        {completed ? "✅" : "❌"}
        {/* {completed && "✅"} */}
      </li>
    </>
  );
};

const List = () => {
  const addTask = () => {
    setArray([
      ...array,
      { name: "new", view: false },
    ]);
  };

  let list = [
    { id: 0, name: "Course one", view: true },
    { id: 1, name: "Course one", view: true },
    { id: 2, name: "Course two", view: true },
    { id: 3, name: "Course three", view: true },
    { id: 4, name: "Course four", view: true },
    { id: 5, name: "Course five", view: true },
    { id: 6, name: "Course six", view: false },
    { id: 7, name: "Course seven", view: false },
  ];

  const [array, setArray] = useState(list);

  const handleAddTask = (val) => {
    if (val < 1) return;

    let value = val.trim();

    const send = {
      id: array.length,
      name: value,
      view: false,
    };

    setArray([...array, send]);
  };

  return (
    <>
      <h1>Tasks list</h1>
      <AddTask addTask={handleAddTask}></AddTask>
      <ol>
        {array.map((item) => (
          <Items
            key={item.id}
            title={item.name}
            completed={item.view}
          ></Items>
        ))}
      </ol>
    </>
  );
};

export { List };
