import { useContext } from "react";
import { FaDeleteLeft } from "react-icons/fa6";
import { TodoItemsContext } from "../store/item-store";

function Task({ task, date, handleDeleteButton }) {
  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <form className="row">
      <div className="col-4">
        <p>{task}</p>
      </div>
      <div className="col-4">
        <p>{date}</p>
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger action-button"
          onClick={() => deleteItem(task)}
        >
          <FaDeleteLeft />
        </button>
      </div>
    </form>
  );
}

export default Task;
