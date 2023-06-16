import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <section className="state">
      <h2>fetch data example</h2>
      <h3>Github users</h3>
      <ul className="users">
        {users.map(({ login, id, avatar_url, html_url }) => (
          <li className="userEl" key={id}>
            <img
              style={{ width: "3rem", borderRadius: "50%" }}
              src={avatar_url}
            />

            <h5>{login}</h5>
            <a href={html_url}>Profile</a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default FetchData;
