import React, { useState } from "react";
import { FiUser, FiPhone, FiMail, FiMessageSquare } from "react-icons/fi"; // Import icons

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const getUserData = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, phone, email, message } = user;

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

    if (res) {
      setUser({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
      alert("Data has been sent successfully");
    }
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-4xl mb-6">Contact me</h1>
      <div className="w-11/12 md:w-3/4 lg:w-2/3 bg-black border-2 border-white rounded-3xl p-8">
        <form onSubmit={postData} className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full">
              <label className="text-xl mb-2 flex items-center">
                <FiUser className="mr-2 text-blue-400" /> Name:
              </label>
              <input
                className="p-3 bg-black border-2 border-white rounded-3xl text-white placeholder-gray-400"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={user.name}
                onChange={getUserData}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="text-xl mb-2 flex items-center">
                <FiPhone className="mr-2 text-green-400" /> Phone No:
              </label>
              <input
                className="p-3 bg-black border-2 border-white rounded-3xl text-white placeholder-gray-400"
                type="text"
                name="phone"
                placeholder="Enter your Phone No."
                value={user.phone}
                onChange={getUserData}
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col w-full">
              <label className="text-xl mb-2 flex items-center">
                <FiMail className="mr-2 text-red-400" /> E-mail:
              </label>
              <input
                className="p-3 bg-black border-2 border-white rounded-3xl text-white placeholder-gray-400"
                type="text"
                name="email"
                placeholder="Enter your E-mail"
                value={user.email}
                onChange={getUserData}
              />
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label className="text-xl mb-2 flex items-center">
              <FiMessageSquare className="mr-2 text-yellow-400" /> Message:
            </label>
            <textarea
              className="p-3 bg-black border-2 border-white rounded-3xl text-white placeholder-gray-400 h-48"
              name="message"
              placeholder="Any suggestions"
              value={user.message}
              onChange={getUserData}
            />
          </div>
          <button
            type="submit"
            className="self-end px-6 py-3 mt-4 bg-black border-2 border-white rounded-3xl hover:bg-white hover:text-black transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
