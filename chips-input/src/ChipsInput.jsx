import React, { useState } from "react";

const ChipsInput = () => {
  const [chipsInput, setChipsInput] = useState("");
  const [chipsArr, setChipsArr] = useState([]);
  const handleOnKeyDown = (e) => {
    if (e.key === "Enter" && chipsInput.trim() !== "") {
      setChipsArr(() => [...chipsArr, chipsInput]);
      setChipsInput("");
    }
  };

  const handleDeleteChip = (index) => {
    const copyChipsArr = [...chipsArr];
    copyChipsArr.splice(index, 1);
    setChipsArr(copyChipsArr);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <label>Chips Input</label>
      <input
        placeholder="Type a chips and press tag"
        type="text"
        style={{ border: "2px solid #FFF", height: "25px", padding: "5px" }}
        value={chipsInput}
        onChange={(e) => setChipsInput(e.target.value)}
        onKeyDown={(e) => handleOnKeyDown(e)}
      />
      <div style={{ display: "flex", gap: "5px" }}>
        {chipsArr.map((chip, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "blueviolet",
                color: "white",
                display: "flex",
                gap: "10px",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px 10px",
                borderRadius: "10px",
              }}
            >
              {chip}
              <button
                style={{ color: "red", backgroundColor: "white" }}
                onClick={handleDeleteChip}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChipsInput;
