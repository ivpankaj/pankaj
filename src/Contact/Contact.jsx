import React from "react";
import "../Contact/Contact.css";
import { useState } from "react";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name,phone, email, message } = user;

    const res = await fetch(
      "https://portfolio-db2bf-default-rtdb.firebaseio.com/portdata.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          message,
        }),
      }
    );
    if(res){
      setUser({
        name: "",
        phone: "",
        email: "",
        message: "",
      })

      alert("Data has been sent successfully")
    }
  };
  return (
    <div className="contact">
      <h1>Contact me </h1>

      <div className="form">
        <h1 className="form-text">Connect here!</h1>

        <form method="POST">
          <div className="input1">
            <h2>
              Name:{" "}
              <input
                className="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={user.name}
                onChange={getUserData}
                required
              />{" "}
            </h2>
            <h2>
              Phone No:{" "}
              <input
                className="ph"
                type="text"
                name="phone"
                placeholder="Enter your Phone No."
                value={user.phone}
                onChange={getUserData}
              />{" "}
            </h2>
            <h2>
              E-mail:{" "}
              <input
                className="mail"
                type="text"
                name="email"
                placeholder="Enter your E-mail"
                value={user.email}
                onChange={getUserData}
              />{" "}
            </h2>
          </div>
          <div className="input2">
            <input
              className="place"
              type="text"
              name="message"
              placeholder="Any suggestions"
              value={user.message}
              onChange={getUserData}
            />
          </div>
          <button onClick={postData} className="submit">
            submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
