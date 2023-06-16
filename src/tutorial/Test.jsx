import React, { useReducer } from "react";
import { data } from "../data";
import useCaseReducers from "use-case-reducers";
// import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "../action";
// import { reducer } from "../reducer";

const defaultState = {
  people: data,
  isLoading: false,
};

const caseReducers = {
  remove: (state, id) => {
    let newPeople = state.people.filter((person) => person.id !== id);
    {
      state.people = newPeople;
    }
  },
  clear: (state) => {
    state.people = [];
  },
  reset: (state) => {
    state.people = data;
  },
};

const Test = () => {
  //const [state, dispatch] = useReducer(reducer, defaultState);
  const [state, dispatch, { remove, clear, reset }] = useCaseReducers(
    caseReducers,
    defaultState
  );

  return (
    <div className="container">
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => dispatch(remove(id))}>remove</button>
          </div>
        );
      })}
      {state.people.length > 0 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => dispatch(clear())}
        >
          clear items
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={() => dispatch(reset())}
        >
          reset
        </button>
      )}
    </div>
  );
};

export default Test;
