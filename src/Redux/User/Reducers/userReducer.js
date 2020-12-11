const initalState = {
    userName:'',
}

const userReducer = (state = initalState, action) => {
    switch(action.type){
       case 'SAVE_USERNAME':
       return {
          ...state,  
          userName: action.payload.user,
        };

       default:
       return state;
    }
  }; 

export default userReducer