import React, { useReducer } from "react";
import { data } from "../data";
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "../action";
import { reducer } from "../reducer";

const defaultState = {
  people: data,
  isLoading: false,
};

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => dispatch({ type: REMOVE_ITEM, payload: id });

  const clear = () => dispatch({ type: CLEAR_LIST });

  const reset = () => dispatch({ type: RESET_LIST });

  return (
    <div className="container">
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length > 0 ? (
        <button className="btn" style={{ marginTop: "2rem" }} onClick={clear}>
          clear items
        </button>
      ) : (
        <button className="btn" style={{ marginTop: "2rem" }} onClick={reset}>
          reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
