import { createStore, combineReducers } from 'redux';
import { useDispatch } from 'react-redux';
import { reducer as countsReducer } from "./counts";

const rootReducer = combineReducers({
  counts: countsReducer,
});

const store = createStore(rootReducer);
export default store;

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
