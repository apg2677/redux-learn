const { legacy_createStore } = require("redux");

const createStore = legacy_createStore;
// action creator
const ADD_TASK = "ADD_TASK";

const addTask = (payload) => {
  return {
    type: ADD_TASK,
    payload,
  };
};

// reducer (prevState, action) => newState
const initialState = {
  taskList: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, payload],
      };
    default:
      return state;
  }
};

const store = createStore(reducer, undefined);

console.log("initial state", store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("store updated", store.getState())
);
store.dispatch(addTask({ title: "CODING", isCompleted: false }));

store.dispatch(addTask({ title: "Dinner", isCompleted: false }));

store.dispatch(addTask({ title: "Shopping", isCompleted: true }));

unsubscribe();
