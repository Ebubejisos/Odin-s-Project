import { useState } from "react";

const Button = () => {
  const [isFalse, setIsFalse] = useState(true);
  function toggleBtn() {
    if (isFalse) {
      setIsFalse(false);
    } else {
      setIsFalse(true);
    }
  }
  return (
    <>
      <button
        onClick={() => {
          const span = document.querySelector("h2 > span");
          span.setAttribute("contenteditable", "true");
          console.log(span.innerText);
          toggleBtn();
        }}
      >
        {isFalse ? "edit" : "update"}
      </button>
    </>
  );
};

export default Button;
