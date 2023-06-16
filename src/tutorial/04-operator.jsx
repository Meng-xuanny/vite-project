import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);

  const login = () => setUser({ name: "jaydn" });

  const logout = () => setUser(null);
  return (
    <section className="state">
      <h2>user challenge</h2>

      {user ? (
        <>
          <h4>hello there, {user.name}</h4>
          <button onClick={logout}>log out</button>
        </>
      ) : (
        <>
          <h4>please login</h4>
          <button onClick={login}>log in</button>
        </>
      )}
    </section>
  );
};

export default UserChallenge;
