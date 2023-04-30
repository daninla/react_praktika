

const defaultState = { 
  sneakers:[
    
    {"id":"1","title":"Чоловічі кросівки Nike Air Max 270","price":1400,"imageUrl":" sneacers/1.jpg"},
    {"id":"2","title":"Чоловічі кросівки Nike Sport React Pegasus","price":1000,"imageUrl":" sneacers/2.jpg"},
    {"id":"3","title":"Чоловічі кросівки Nike Md Valliant ","price":700,"imageUrl":" sneacers/3.jpg"},
    {"id":"4","title":"Чоловічі кросівки Puma unisex 90s Runner","price":550,"imageUrl":" sneacers/4.jpg"},
    {"id":"5","title":"Чоловічі кросівки Puma unisex 90s Runner","price":990,"imageUrl":" sneacers/2.jpg"},
    {"id":"6","title":"Чоловічі кросівки Puma unisex 90s Runner","price":1000,"imageUrl":" sneacers/3.jpg"},
 
],
pageSize:3,
totalCount:6,
currentPage:1,

sneakersKorz:[]
  }

  console.log(defaultState.currentPage)

  const ADD_TOVAR = "ADD_TOVAR"
  const  REMOVE_TOVAR= " REMOVE_TOVAR"
  const PAGINATION_TOVAR = "PAGINATION_TOVAR"


 export const tovarReducer = (state = defaultState, action) => {
    switch(action.type){
        case ADD_TOVAR:
          return {...state, sneakersKorz:[...state.sneakersKorz, action.payload]}
          case REMOVE_TOVAR:
            return {...state, sneakersKorz: state.sneakersKorz.filter(kart=> kart.id !== action.payload)}
          case PAGINATION_TOVAR:
            return {...state, currentPage:action.payload}
      default:
        return state
    }
  }
  
  export const addCustomerAction = (payload) => ({type:ADD_TOVAR, payload})
  export const removeCustomerAction = (payload) => ({type:REMOVE_TOVAR, payload})
  export const paginationCustomerAction = (payload) => ({type:PAGINATION_TOVAR, payload})