import "./App.css";
import React, { useState } from "react";

import json from "./testData.json";
function App() {
  const [data] = useState(json);

  const List = ({ items }) => {
    const [isExpanded, setIsExpanded] = useState({});

    const toggleExpand = (item) => {
      setIsExpanded((prev) => ({
        ...prev,
        [item.name]: !prev[item.name],
      }));
    };
    return (
      <div className="list-container">
        {items.map((item, index) => {
          return (
            <div key={index} className="item">
              {item.isFolder && <span className="folder-icon">📁</span>}
              {!item.isFolder && <span className="file-icon">📄</span>}
              <span className="file-name">{item.name}</span>
              {item.isFolder && (
                <span
                  onClick={() => toggleExpand(item)}
                  className="expand-icon"
                >
                  {isExpanded[item.name] ? "🔼" : "🔽"}
                </span>
              )}
              {item.isFolder && <span className="add-file">➕</span>}
              {/* {<span className="remove-file">➖</span>} */}
              {isExpanded[item.name] &&
                item.children &&
                item.children.length > 0 && <List items={item.children} />}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <h2>Frontend React Machine Coding Round : File Explorer</h2>
      <List items={data} />
      <div></div>
    </>
  );
}

export default App;
