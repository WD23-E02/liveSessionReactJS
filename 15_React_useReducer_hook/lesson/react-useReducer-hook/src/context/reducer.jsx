//useReducer will combine all states into single state, and all functions into a single function


export function reducer(state,action){
    console.log(action)
    switch(action.type){
        case "increment":
            return {...state,count:state.count+1 }
        case "decrement":
            return {...state,count:state.count-1 }
        case "reset":
            return {...state,count:0 }
    }
// change count
// change todoItems
// change user data
}
export const initialState={
    count:0,
    todoItems: [{id:1,text:"task1",done:false},{id:2,text:"task2",done:false},{id:3,text:"task3",done:false}],
    user:null,
    cartItems:[]
}