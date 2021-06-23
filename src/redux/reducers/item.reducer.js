const item = (state = [], action) => {
    switch (action.type) {
      case 'SET_ITEMS':
        return action.payload;
        
      default:
        return state;
    }
  };
  
 
  export default item;

  // array of objects 
//   {
//       id: ,
//       description: ,
//       image_url: , 
//       user_id: ,
//   }