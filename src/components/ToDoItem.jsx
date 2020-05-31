import React, { useState } from "react";

function ToDoItem(props) {
  const [check, setcheck] = useState(false);
  let dosome = () => {
    setcheck(!check);
    console.log();
  };
  return (
    <div
      onClick={() => {
        props.onchecked(props.id);
      }}
    >
      <li style={{ textDecoration: check ? "line-through" : "none" }}>
        {props.value}
      </li>
    </div>
  );
}

export default ToDoItem;
