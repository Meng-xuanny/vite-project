import React, { useState } from "react";
import { data } from "../data";

const Form = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password,setPassword]=useState('')
  const [users, setUsers] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setUsers((prevUsers) => ({
      ...prevUsers,
      [e.target.name]: e.target.value,
    }));
  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!users.name) return;
    // setUsers((prevUsers) => [...prevUsers, { id: 5, name }]);
    // setName("");
    const formData = new FormData(e.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    //console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    e.currentTarget.reset();
  };

  const removeUser = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <section className="section-state">
      <form className="form" onSubmit={handleSubmit}>
        <h2>controlled inputs</h2>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={users.name}
            onChange={handleChange}
            name="name"
          />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-input"
            id="email"
            value={users.email}
            //onChange={(e) => setEmail(e.target.value)}
            onChange={handleChange}
            name="email"
          />
        </div>
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-input"
            id="password"
            value={users.password}
            //onChange={(e) => setPassword(e.target.value)}
            onChange={handleChange}
            name="password"
          />
        </div>
        <button className="btn btn-block" type="submit">
          Submit
        </button>
      </form>

      {/* <div>
        {users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <button type="button" onClick={() => removeUser(user.id)}>
              remove
            </button>
          </div>
        ))}
      </div> */}
    </section>
  );
};

export default Form;
