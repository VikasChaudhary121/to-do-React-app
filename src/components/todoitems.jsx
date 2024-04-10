import { useContext } from "react";
import { TodoItemsContext } from "../store/item-store";
import Task from "./task";

const TodoItems = () => {
  const itemsArray = useContext(TodoItemsContext);

  return (
    <>
      {itemsArray.todoItem.map((item) => (
        <Task key={item.name} task={item.name} date={item.date}></Task>
      ))}
    </>
  );
};

export default TodoItems;
