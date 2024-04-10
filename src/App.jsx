import { useState } from "react";
import AppName from "./components/AppName";
import InputTake from "./components/input-take";
import TodoItems from "./components/todoitems";
import styles from "./App.module.css";
import Container from "./components/container";
import Task from "./components/task";
import EmptyMassage from "./components/empty_massage";
import "C:/Users/vikas/OneDrive/Documents/reactjs/projects/todo-app/todo-app/src/components/container.css";
import { TodoItemsContext } from "./store/item-store";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const addNewItem = (newitem, date) => {
    setTodoItem((prevItems) => [...prevItems, { name: newitem, date: date }]);
  };

  const deleteItem = (itemName) => {
    const newTodoItems = todoItem.filter((item) => item.name !== itemName);
    setTodoItem(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItem: todoItem,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className={styles["main-cont"]}>
        <div className={styles["input"]}>
          <div id="head">
            <AppName />
          </div>
          <div className={styles["add-todo"]}>
            <InputTake></InputTake>
          </div>
        </div>
        <div className={styles["container"]}>
          <EmptyMassage todoArray={todoItem}></EmptyMassage>
          <TodoItems itemsArray={todoItem} />
        </div>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
