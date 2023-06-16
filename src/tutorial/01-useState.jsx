import { useState } from "react";
import { data } from "../data";
import React from "react";

const UseState = () => {
  const [person, setPerson] = useState(data);

  const removePerson = function (id) {
    setPerson((prevPerson) => prevPerson.filter((person) => person.id !== id));
  };

  const clear = () => setPerson([]);

  const personEl = person.map((person) => (
    <section className="state__element" key={person.id}>
      <div>{person.name}</div>
      <button onClick={() => removePerson(person.id)}>remove</button>
    </section>
  ));

  return (
    <section className="state">
      <h2>useState example</h2>
      {personEl}
      <button
        style={{ backgroundColor: "purple", color: "white" }}
        onClick={clear}
      >
        clear all
      </button>
    </section>
  );
};

export default UseState;
