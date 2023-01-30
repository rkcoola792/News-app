// contetxt creator
// provider
// useContext

import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../reducer";

//   fethcing data from apo
let API = "https://hn.algolia.com/api/v1/search?query=html";

// defining the iitial sate of useReducer
export const initialState = {
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
  isLoading: true,
};

// creating context
export const AppContext = createContext();

// to create a provider function, children is whole react components
export const AppProvider = ({ children }) => {
  // const [state,setState]=useState(initialValue)
  const [state, dispatch] = useReducer(reducer, initialState);

  //   to update the loading
  //

  // api fetch function
  const fetchApiData = async (url) => {
    try {
      dispatch({ type: "SET_LOADING" });
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      //to update the data make use of dispatch that will trigger the action function of reducer function
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {}
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}> {children}</AppContext.Provider>
  );
};

// custom hook creation (hook which return a hook is known as custom hook)
export const useGlobalContext = () => {
  return useContext(AppContext);
};
