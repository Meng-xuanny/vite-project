import React from "react";
import { people } from "../data";
import avatar from "../assets/default-avatar.svg";

const List = () => {
  return (
    <section className="state">
      <ul>
        {people.map(({ id, name, nickName = "jaybowl", images }) => {
          const img = images?.[0]?.small?.url ?? avatar;
          return (
            <div key={id}>
              <img src={img} alt={name} style={{ width: "50px" }} />
              <h4>{name}</h4>
              <p>{nickName}</p>
            </div>
          );
        })}
      </ul>
    </section>
  );
};

export default List;
