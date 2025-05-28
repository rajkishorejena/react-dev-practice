import "./App.css";
import { useState } from "react";

import json from "./testData.json";

const List = ({ items, addItemToFolder, removeFolder }) => {
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
              <span onClick={() => toggleExpand(item)} className="expand-icon">
                {isExpanded[item.name] ? "🔼" : "🔽"}
              </span>
            )}
            {item.isFolder && (
              <span
                onClick={() => addItemToFolder(item.id)}
                className="add-file"
              >
                ➕
              </span>
            )}
            {item.isFolder && (
              <span
                onClick={() => removeFolder(item.id)}
                className="remove-file"
              >
                ➖
              </span>
            )}
            {isExpanded[item.name] &&
              item.children &&
              item.children.length > 0 && (
                <List
                  items={item.children}
                  addItemToFolder={addItemToFolder}
                  removeFolder={removeFolder}
                />
              )}
          </div>
        );
      })}
    </div>
  );
};

function App() {
  const [data, setData] = useState(json);
  // const name = prompt("Enter File name");

  const addItemToFolder = (folderId) => {
    console.log("Add Folder Id", folderId);
    const newItem = {
      id: `${Math.random().toString(36).substring(2, 4)}`,
      name: `name ${Math.floor(Math.random() * 100)}`,
      isFolder: true,
      children: [],
    };
    console.log("new folder", newItem);

    const addItemRecursively = (items) => {
      return items.map((item) => {
        if (item.id === folderId) {
          return {
            ...item,
            children: [...item.children, newItem],
          };
        } else if (item.children) {
          return {
            ...item,
            children: addItemRecursively(item.children),
          };
        }
        return item;
      });
    };

    setData((prevData) => addItemRecursively(prevData));
  };

  const removeFolderHandler = (folderId) => {
    const removeItemRecursively = (item) => {
      return item
        .filter((item) => item.id !== folderId)
        .map((item) => {
          if (item.children) {
            return { ...item, children: removeItemRecursively(item.children) };
          }
          return item;
        });
    };
    setData((prevData) => removeItemRecursively(prevData));
  };
  return (
    <>
      <h2>Frontend React Machine Coding Round : File Explorer</h2>
      <List
        items={data}
        addItemToFolder={addItemToFolder}
        removeFolder={removeFolderHandler}
      />
      <div></div>
    </>
  );
}

export default App;
