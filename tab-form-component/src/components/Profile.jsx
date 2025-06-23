import React from "react";

const Profile = ({ data, setData, errors }) => {
  const { name, email, age } = data;
  const handleInputChange = (e, item) => {
    setData((prvData) => ({ ...prvData, [item]: e.target.value }));
  };
  return (
    <div className="form-group">
      <h3>Profile Component</h3>
      <div className="form-field">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => handleInputChange(e, "name")}
        />
        {errors.name && <span className="error-message">{errors.name}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => handleInputChange(e, "email")}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>
      <div className="form-field">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Enter your age"
          value={age}
          onChange={(e) => setData({ ...data, age: e.target.value })}
        />
        {errors.age && <span className="error-message">{errors.age}</span>}
      </div>
    </div>
  );
};

export default Profile;
