
const defaultState = {
  koments:[],
newMess: '',
}

const ADD_KOMENT = "ADD_CUSTOMER"
const CHANGE_KOMENT= "REMOVE_CUSTOMER"
export const SET_USERS= 'ADD_MANY_CASTOMERS'
export const FETCH_USERS = 'FETCH_USERS'


 export const comentReducer = (state = defaultState, action) => {
    switch(action.type){
      case SET_USERS:
          return {...state, koments:[...state.koments, ...action.payload] }
        case ADD_KOMENT:
          return {...state, koments:[...state.koments, {name:state.newMess, id:0}]}
        case CHANGE_KOMENT:
          return {...state,newMess:action.payload}
      default:
        return state
    }
  }
  

export const changeKomentAction = (payload)  => ({type:CHANGE_KOMENT, payload})
export const addKomentAction = ()=> ({type:ADD_KOMENT})
export const setUsers = (payload) => ({type: SET_USERS, payload})
