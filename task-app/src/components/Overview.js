import { useState } from "react";
import Button from "./Button";
import close from "./images/close.svg";

const Overview = ({ taskArr, handleDelete, setTaskArray }) => {
  const [updTitle, setUpdTitle] = useState("");
  const [updDetail, setUpdDetail] = useState("");

  function handleEdit(id) {
    const taskIndex = taskArr.findIndex((element) => element.id == id);
    const mutArray = taskArr.slice();
    mutArray[taskIndex].details = updDetail;
    mutArray[taskIndex].title = updTitle;
    setTaskArray(mutArray);
  }

  return (
    <ul className="overview" style={{ listStyleType: "none" }}>
      {taskArr.map((element) => (
        <li className="task-list" key={element.id}>
          <h2>
            {taskArr.indexOf(element) + 1 + ". "}
            <span id="focus" className="span-text">
              {" "}
              {element.title}
            </span>
          </h2>
          <p>
            <span className="span-text">
              {" "}
              {element.details} {""}
            </span>
            <img
              src={close}
              alt="close"
              onClick={() => handleDelete(element.id)}
              title="remove task"
            />
          </p>
          <Button handleEdit={handleEdit} />
        </li>
      ))}
    </ul>
  );
};

export default Overview;
