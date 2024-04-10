import { TodoItemsContext } from "../store/item-store";
import { useContext } from "react";

function EmptyMassage() {
  const todoArray = useContext(TodoItemsContext);
  return todoArray.todoItem.length === 0 && <p>Nothing to do Today</p>;
}

export default EmptyMassage;
