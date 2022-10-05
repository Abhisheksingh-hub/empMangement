const initialState = {
    fromDate: 0,
    toDate: 0,
  };
   
  export default (state = initialState, action) => {
    const {type, payload} = action;
console.log('action.type',action.type);
    switch (action.type) {
       case 'fromDate':
        return {
          ...state,
          fromDate:payload,
        };
        case 'toDate':
        return {
          ...state,
          toDate: payload,
        };
      default:
        return state;
    }
  };