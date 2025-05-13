import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress]);
  return (
    <div>
      <label>Progress Bar</label>
      <div className="progressBarContainer">
        <div
          className="progressBar"
          style={{
            // width: `${progress}%`,
            transform: `translateX(${animatedProgress - 100}%)`,
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax="100"
          aria-valuemin="0"
        >
          {progress}%
        </div>
      </div>
    </div>
  );
};
export default ProgressBar;
