import { createStore } from 'redux';
import RootReducer from './reducers';
import { getTasks, addTask, completeTask } from './actions';

let store = createStore(RootReducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(getTasks());
unsubscribe();
