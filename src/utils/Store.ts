import {
  createStore,
  applyMiddleware,
  compose,
  EmptyObject,
  Store,
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';

type storeData = Store<EmptyObject, any>;

const initialState = {};

const middleware = [thunk];

export const loadState = () => {
  try {
    const serializedState = window.sessionStorage.getItem('state');
    if (serializedState === null) {
      return null;
    }
    return JSON.parse(serializedState);
  } catch (e) {
    return null;
  }
};

export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    window.sessionStorage.setItem('state', serializedState);
  } catch (e) {
    // Ignore write errors;
  }
};

export const getStore = () => {
  let mainStore: storeData;

  mainStore = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(...middleware)),
  );

  if (process.env.ENV === 'DEVELOPMENT') {
    // Persisted Only For Development
    const persistedState = loadState();
    mainStore = createStore(
      rootReducer,
      persistedState,
      compose(applyMiddleware(...middleware)),
    );
    mainStore.subscribe(() => {
      saveState(mainStore.getState());
    });
  }
  return mainStore;
};

const storing: storeData = getStore();

export default storing;
