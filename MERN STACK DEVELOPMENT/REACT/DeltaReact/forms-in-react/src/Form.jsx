import { useState } from "react";
import "./Form.css";

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    userName: "",
    password: "",
  });

  let handleInputChanege = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      userName: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label> <br />
      <input
        type="text"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleInputChanege}
        id="fullName"
        name="fullName"
      />
      <br />
      <br />
      <label htmlFor="userName">UserName</label> <br />
      <input
        type="text"
        placeholder="Enter Username"
        value={formData.userName}
        onChange={handleInputChanege}
        id="userName"
        name="userName"
      />
      <br />
      <br />
      <label htmlFor="password">Password</label> <br />
      <input
        type="password"
        placeholder="Enter password"
        value={formData.password}
        onChange={handleInputChanege}
        id="password"
        name="password"
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
