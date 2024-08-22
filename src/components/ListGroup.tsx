import { useState } from "react";

function ListGroup() {
  const items = ["arjun", "karna", "krishna", "aswathama"];

  const [selectedIndex,setSelectedIndex] = useState(-1);
   
  return (
    <>
      <h1>List items</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {setSelectedIndex(index);}}
          >
            {item}
          </li> // for updateion purpose give key
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
