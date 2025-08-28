export const initialStore=()=>{
  return{
    fName: "Kaleb",
    lName: "Williams",
    baseUrl: "https://playground.4geeks.com/contact/"
  }
}

export default function storeReducer(store, action = {}){

  if(action.type == "set-fName"){
    return {
      ...store, fName: action.payload
  }
}

  if(action.type == "set-lName"){
    return {
      ...store, lName: action.payload
    }
  }

}
  // switch(action.type){
  //   case 'add_task':

  //     const { id,  color } = action.payload

  //     return {
  //       ...store,
  //       todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
  //     };
  //   default:
  //     throw Error('Unknown action.');
  // }    