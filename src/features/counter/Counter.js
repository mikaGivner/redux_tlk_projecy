import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import "./style.css";
import { add, remove } from "./counterSlice";

//all the actions..
const Counter = () => {
  const list = useSelector((state) => state.listItems.list);
  const dispatch = useDispatch();

  const [task, setTask] = useState("");
  const [tasksNom, setTasksNom] = useState(0);
  const [taskToUpdate, setTaskToUpdate] = useState("");
  const [showTask, setShowTask] = useState(false);
  return (
    <>
      <section>
        <input
          type="text"
          placeholder="add a task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button
          onClick={() => {
            localStorage.setItem("newTask", task);
            dispatch(add({ task }));
            setTask("");
          }}
        >
          Add to ToDo
        </button>
        <div className="theList">
          {list.length === 0 ? (
            <div>There are no tasks for today</div>
          ) : (
            list.map((task, i) => {
              return (
                <div className="task" key={i}>
                  <div> task {i + 1}</div>
                  <div>{task}</div>
                  <div
                    onClick={(e) => {
                      dispatch(remove(e.target.key));
                    }}
                  >
                    close
                  </div>
                </div>
              );
            })
          )}
        </div>
        <div className="updateSection">
          <p>Wanna update task number </p>
          <input
            className="numTask"
            type="number"
            value={tasksNom}
            onChange={(e) => {
              setTasksNom(e.target.value);
            }}
          />
          <button
            onClick={() => {
              if (list.indexOf(tasksNom - 1) === -1) {
              } else {
                setTaskToUpdate(list[tasksNom - 1]);
                setShowTask(true);
              }
            }}
          >
            show this task
          </button>
        </div>
        {showTask && <input value={taskToUpdate} />}
      </section>
    </>
  );
};

export default Counter;
