import React, { createContext, useState } from "react";
import Display from "./Display";

const Formcont = createContext();
const FormContext = () => {
  //   const [username, setUsername] = useState("");
  //   const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setFormData({ ...formData, [name]: value });
    } else if (name === "email") {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      username: "",
      email: "",
    });
  };

  return (
    <div>
      <Formcont.Provider value={{ theFormc: formData }}>
        <form
          style={{ maxWidth: "400px", margin: "0 auto" }}
          onSubmit={handleSubmit}
        >
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="username"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
              onChange={handleChange}
            />
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <label
              htmlFor="email"
              style={{ display: "block", marginBottom: "0.5rem" }}
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              style={{ width: "100%", padding: "0.5rem", fontSize: "1rem" }}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
        <Display />
      </Formcont.Provider>
    </div>
  );
};

export default FormContext;
