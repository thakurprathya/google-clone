export const initialState = {  //this is the initial state (how the data looks initially)
    term: null
};
  
export const actionTypes = {  //this command helps in pushing data into data layer
    SET_SEARCH_TERM: "SET_SEARCH_TERM"
};
  
const reducer = (state, action) => {  //when action get dispatched into data layer we listen to it in switch
    // console.log(action);
    switch (action.type) { //listening to dispatched actions
      case actionTypes.SET_SEARCH_TERM:  //if dispatched this block will run changing the data layer
        return {
          ...state,  //keeping everything in that state
          term: action.term,  //changing the term to dispatched term
        };  
      default:  //if dispatched data didn't match default runs
        return state;
    }
};
  
export default reducer;