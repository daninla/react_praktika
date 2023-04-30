
import { setUsers } from "../store/comentReduser";

export const fetchComents = () => {
    return (dispatch) => {
      fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((json) => dispatch(setUsers(json)));
      }
    }
      
    