import React, { useEffect, useRef, useState } from "react";

const OTPContainer = () => {
  const otpLength = 5;
  const [inputArray, setInputArray] = useState(new Array(otpLength).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    inputRef.current[0]?.focus();
  }, []);

  const handleOnChange = (value, index) => {
    if (isNaN(value)) return;
    const newValue = value.trim();

    const newArr = [...inputArray];
    newArr[index] = newValue.slice(-1);
    setInputArray(newArr);
    newValue && inputRef.current[index + 1].focus();
  };

  const handleOnKeyDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      inputRef.current[index - 1]?.focus();
    }
  };

  return (
    <div className="OTPContainer">
      <label>Please Enter the OTP</label>
      <div>
        {inputArray.map((item, index) => {
          return (
            <input
              className="OTPInputField"
              key={index}
              value={item}
              ref={(input) => (inputRef.current[index] = input)}
              onChange={(e) => handleOnChange(e.target.value, index)}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default OTPContainer;
