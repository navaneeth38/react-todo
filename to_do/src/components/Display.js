import React, { useState } from "react";


const Display = (props) => {
  const [done, setDone] = useState(false);
  const item = props.text;
  return (
      <div
        className="container"
        style={{ textDecoration: done && "line-through" }}
      >
        <input
          type="checkbox"
          checked={done}
          onChange={(e) => setDone(e.target.checked)}
        />
        <div className="sub">
          {item.subject}{" "}</div>
          <span className="sub">Priority: 
            {item.priority === 1
              ? "High"
              : item.priority === 2
              ? "Medium"
              : "Low"}
              </span>
            <span className="sub">{item.date}</span>
      </div>
  );
};

export default Display;
