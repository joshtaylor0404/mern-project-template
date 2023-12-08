/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from 'react';
import { reducer } from './reducers';

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ initialValue = {}, ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
