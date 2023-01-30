export const reducer = (state, action) => {
  switch (action.type) {

    case "SET_LOADING":
        return{...state,isLoading:true}


    case "GET_STORIES":
      return {
        ...state,
        // accesing from the initial state and updating
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading:false
      };
  }

  return state;
};
