import { useContext, useRef } from "react";
import { MdAddBox } from "react-icons/md";
import { TodoItemsContext } from "../store/item-store";

function InputTake() {
  const { addNewItem } = useContext(TodoItemsContext);
  let taskName = useRef(" ");
  let dueDate = useRef(" ");

  const handleAddButton = (event) => {
    event.preventDefault();

    const text = taskName.current.value;
    // const date = dueDate.current.value;
    if (text.trim() !== "") {
      addNewItem(taskName.current.value, dueDate.current.value);
      taskName.current.value = " ";
      dueDate.current.value = "";
    }
  };

  return (
    <form className="row input-area" onSubmit={handleAddButton}>
      <div className="col-4">
        <input type="text" ref={taskName} placeholder="TASK TO DO" />
      </div>

      <div className="col-4">
        <input type="date" name="date" id="date" ref={dueDate} />
      </div>

      <div className="col-2">
        <button
          className="btn btn-success action-button"
          onSubmit={handleAddButton}
        >
          <MdAddBox />
        </button>
      </div>
    </form>
  );
}

export default InputTake;
