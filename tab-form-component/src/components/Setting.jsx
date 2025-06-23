import React from "react";

const Setting = ({ data, setData }) => {
  return (
    <div>
      <h3>Setting Component</h3>
      <div className="form-field">
        <label htmlFor="theme">Theme:</label>
        <select
          id="theme"
          name="theme"
          value={data.settings.theme}
          onChange={(e) =>
            setData({
              ...data,
              settings: { ...data.settings, theme: e.target.value },
            })
          }
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
    </div>
  );
};

export default Setting;
