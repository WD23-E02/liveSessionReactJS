//useReducer will combine all states into single state, and all functions into a single function

export function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    case "reset":
      return { ...state, count: 0 };
    case "additem":
        /* localStorage.setItem("data",JSON.stringify({
            ...state,
            todoItems: [
              ...state.todoItems,
              { id: new Date().getTime(), text: action.payload, done: false },
            ],
          })) */
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          { id: new Date().getTime(), text: action.payload, done: false },
        ],
      };
    case "deleteitem":
      return {
        ...state,
        todoItems: state.todoItems.filter((elem) => elem.id !== action.payload),
      };
    case "updateitem":
      return {
        ...state,
        todoItems: state.todoItems.map((item) =>
          item.id === action.payload ? { ...item, done: !item.done } : item
        ),
      };
    default:
      return state;
  }
  // change count
  // change todoItems
  // change user data
}
export const initialState = {
  count: 0,
  todoItems: /* localStorage.getItem("data")? JSON.parse(localStorage.getItem("data")).todoItems : */ [],
  user: null,
  cartItems: []
};
