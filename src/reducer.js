import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "./action";
import { data } from "./data";

export const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) return { ...state, people: [] };

  if (action.type === RESET_LIST) return { ...state, people: data };

  if (action.type === REMOVE_ITEM) {
    console.log(action);
    let newPeople = state.people.filter(
      (person) => person.id !== action.payload
    );
    return { ...state, people: newPeople };
  }
  throw new Error(`no match ${action.type} --action type`);
};
