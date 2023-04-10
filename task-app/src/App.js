import { useState } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

function App() {
  const [task, setTask] = useState("");
  const [detail, setDetail] = useState("");
  const [updTitle, setUpdTitle] = useState("");
  const [updDetail, setUpdDetail] = useState("");
  const [taskArray, setTaskArray] = useState([
    {
      title: "Home work",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure totam nisi magnam veniam odit, consequuntur sint vero iusto harum!",
      id: 1,
    },
    {
      title: "Gym time",
      details:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere consectetur esse neque explicabo, in dolor.",
      id: 2,
    },
  ]);
  function handleClick() {
    // const num = Math.floor(Math.random() * 1000);
    if (task == "" || detail == "") {
      return;
    }
    setTaskArray(
      taskArray.concat({ title: task, details: detail, id: uniqid() })
    );
    setTask("");
    setDetail("");
  }

  function handleDelete(id) {
    const newArray = taskArray.filter((element) => element.id != id);
    setTaskArray(newArray);
  }
  function handleEdit(id) {
    const taskIndex = taskArray.findIndex((element) => element.id == id);
    const mutArray = taskArray.slice();
    mutArray[taskIndex].details = updDetail;
    mutArray[taskIndex].title = updTitle;
    setTaskArray(mutArray);
  }

  return (
    <div className="App">
      <div className="input">
        <label>Task Name:</label>
        <input
          type="text"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <label>Task Description:</label>
        <textarea
          required
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleClick} className="addBtn">
        Add Task
      </button>
      <hr />
      <Overview
        taskArr={taskArray}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        setUpdTitle={setUpdTitle}
        setUpdDetail={setUpdDetail}
      />
    </div>
  );
}

export default App;
