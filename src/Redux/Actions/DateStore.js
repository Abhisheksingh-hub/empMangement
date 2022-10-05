 
  
  export const getDateData = response => {
    return {
      type: response.dateType,
      payload: response.day,
    };
  };