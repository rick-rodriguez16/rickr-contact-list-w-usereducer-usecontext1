export const initialStore=()=>{
  return{
    // message: null,
    // todos: [
    //   {
    //     id: 1,
    //     title: "Make the bed",
    //     background: null,
    //   },
    //   {
    //     id: 2,
    //     title: "Do my homework",
    //     background: null,
    //   }
    // ],
    contacts: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':
    //   const { id,  color } = action.payload
    //   return {
    //     ...store,
    //     todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
    //   };
    break;

    case 'fetchedContacts':
      // console.log("In reducer: fetchedContact");
      // console.log('payload: ', action.payload);
      let contactArray = action.payload;      
      return {
        ...store,
        contacts: [...contactArray]
      }
    case 'createdContact':
      let newContact = action.payload;
      return {
        ...store,
        contacts: [...store.contacts, newContact]
      }
    case 'updatedContact':
      break;
    case 'deletedContact':
      break;
    default:
      throw Error('Unknown action.');
  }    
}
