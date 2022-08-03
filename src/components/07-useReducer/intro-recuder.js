const initialState = [
  {
    id: 1,
    todo: "Recolectar las piedras del alma",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  console.log("action==>", action);
  switch (action?.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    default:
      return state;
  }
};

const newTodo = {
  id: 2,
  todo: "hacer algo",
  done: false,
};

const addTodoAction = {
  type: "ADD_TODO",
  payload: newTodo,
};

let todos = todoReducer();

todos = todoReducer(todos, addTodoAction);

console.log("todos==>", todos);
