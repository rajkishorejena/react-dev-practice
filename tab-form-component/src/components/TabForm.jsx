import React, { Component } from "react";
import Profile from "./Profile";
import Setting from "./Setting";
import Interest from "./Interest";

const TabForm = () => {
  const [activeTab, setActiveTab] = React.useState(1);
  const [formData, setFormData] = React.useState({
    name: "Rahul",
    email: "rahul@gmail.com",
    age: "21",
    theme: "light",
    interests: ["gaming"],
    settings: {
      theme: "light",
    },
  });

  const [errors, setErrors] = React.useState({});
  const TabList = [
    {
      id: 1,
      name: "Profile",
      Component: Profile,
      Validate: () => {
        const newErrors = {};
        if (!formData.name) {
          newErrors.name = "Name is required";
        } else if (formData.name.length < 3) {
          newErrors.name = "Name must be at least 3 characters long";
        }
        if (!formData.email) {
          newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = "Email is invalid";
        }
        if (!formData.age || formData.age <= 0) {
          newErrors.age = "Age must be a positive number";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      },
    },
    {
      id: 2,
      name: "Interest",
      Component: Interest,
      Validate: () => {
        const newErrors = {};
        if (formData.interests.length === 0) {
          newErrors.interests = "At least one interest must be selected";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      },
    },
    {
      id: 3,
      name: "Setting",
      Component: Setting,
      Validate: () => {
        // for the Setting tab, we can assume that the theme is required as it is dropped down always there will be value, so validation might not be needed
        const newErrors = {};
        if (!formData.settings.theme) {
          newErrors.theme = "Theme is required";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      },
    },
  ];

  const ActiveTabComponent = TabList[activeTab - 1].Component;
  const handleTabClick = (id) => {
    // Validate the current tab before moving to the next one
    const currentTab = TabList[activeTab - 1];
    if (currentTab.Validate && !currentTab.Validate()) {
      return; // Prevent moving to the next tab if validation fails
    }
    setActiveTab(id);
  };

  const handleSubmit = () => {
    console.log("Form submitted with data:", formData);
    alert("Form submitted successfully!");
  };

  const handleNextButton = () => {
    // Validate the current tab before moving to the next one
    const currentTab = TabList[activeTab - 1];
    if (currentTab.Validate && !currentTab.Validate()) {
      return; // Prevent moving to the next tab if validation fails
    }
    setActiveTab((prevTab) => {
      if (prevTab < TabList.length) {
        return prevTab + 1;
      }
      return prevTab; // Prevent going beyond the last tab
    });
  };
  const handlePrvButton = () => {
    // Validate the current tab before moving to the previous one
    const currentTab = TabList[activeTab - 1];
    if (currentTab.Validate && !currentTab.Validate()) {
      return; // Prevent moving to the previous tab if validation fails
    }
    setActiveTab((prevTab) => {
      if (prevTab > 1) {
        return prevTab - 1;
      }
      return prevTab; // Prevent going below the first tab
    });
  };

  return (
    <>
      <div className="tab-form">
        {TabList.map((tab) => (
          <div
            key={tab.id}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="tab-content">
        <ActiveTabComponent
          data={formData}
          setData={setFormData}
          errors={errors}
        />
      </div>
      <div>
        {activeTab > 1 && (
          <button onClick={handlePrvButton} className="button">
            Prv
          </button>
        )}
        {activeTab < 3 && (
          <button onClick={handleNextButton} className="button">
            Next
          </button>
        )}
        {activeTab === 3 && (
          <button onClick={handleSubmit} className="button">
            Submit
          </button>
        )}
      </div>
    </>
  );
};

export default TabForm;
