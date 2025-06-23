import React from "react";

const Interest = ({ data, setData, errors }) => {
  const { interests } = data;
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setData((prevData) => ({
      ...prevData,
      interests: checked
        ? [...prevData.interests, name]
        : prevData.interests.filter((interest) => interest !== name),
    }));
  };

  return (
    <div>
      <h3>Interest Component</h3>
      <div className="form-field-interest">
        <label htmlFor="interests">Interests:</label>
        <div>
          <label htmlFor="checkbox">programming</label>
          <input
            type="checkbox"
            id="programming"
            name="programming"
            checked={interests.includes("programming")}
            onChange={handleCheckboxChange}
          />
        </div>
        <div>
          <label htmlFor="checkbox">music</label>
          <input
            type="checkbox"
            id="music"
            name="music"
            checked={interests.includes("music")}
            onChange={handleCheckboxChange}
          />
        </div>
        <div>
          <label htmlFor="checkbox">gaming</label>
          <input
            type="checkbox"
            id="gaming"
            name="gaming"
            checked={interests.includes("gaming")}
            onChange={handleCheckboxChange}
          />
        </div>
        {errors.interests && (
          <span className="error-message">{errors.interests}</span>
        )}
      </div>
    </div>
  );
};

export default Interest;
