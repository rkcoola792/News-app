export const reducer = (state, action) => {
  switch (action.type) {
    
    case "SET_LOADING":
      return { ...state, isLoading: true };

    case "GET_STORIES":
      return {
        ...state,
        // accesing from the initial state and updating
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((curEle) => curEle.objectID !== action.payload),
      };

    case "SEARCH_QUERY":
      return {
        ...state,
        query: action.payload,
      };
  }

  return state;
};
