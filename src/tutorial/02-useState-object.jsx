import { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "john",
    age: 28,
    hobby: "screams at the computer",
  });

  const togglePerson = () => {
    setPerson({ name: "peter", age: 30, hobby: "eats ice cream" });
  };

  return (
    <section className="state">
      <h2>useState object example</h2>
      <div className="state__element">
        <h4>{person.name}</h4>
        <h4>{person.age}</h4>
        <p>Enjoys:{person.hobby}</p>
        <button
          onClick={togglePerson}
          style={{ backgroundColor: "blue", color: "white" }}
        >
          show Peter
        </button>
      </div>
    </section>
  );
};

export default UseStateObject;
