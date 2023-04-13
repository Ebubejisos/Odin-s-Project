import { useState } from "react";
import close from "./images/close.svg";

const Overview = ({ taskArr, handleDelete, handleEdit }) => {
  const [isEdited, setIsEdited] = useState(false);

  return (
    <ul className="overview" style={{ listStyleType: "none" }}>
      {taskArr.map((element) => (
        <li className="task-list" key={element.id}>
          <h2>
            {taskArr.indexOf(element) + 1 + ". "}
            <span
              id="focus"
              className="span-text"
              contentEditable={isEdited ? true : false}
            >
              {" "}
              {element.title}
            </span>
          </h2>
          <p>
            <span
              className="span-text"
              contentEditable={isEdited ? true : false}
            >
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
          <button
            onClick={() => {
              if (isEdited == false) {
                setIsEdited(true);
                const span = document.querySelector("#focus");
                console.log(span.innerText);
              } else {
                handleEdit(element.id);
                setIsEdited(false);
              }
            }}
          >
            {isEdited == false ? "edit" : "update"}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Overview;
