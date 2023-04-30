import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './header/header';
import Main from './main/Main'
import Korz from './korz/Korz';
import Koment from './koment/koment';
import { addCustomerAction, paginationCustomerAction, removeCustomerAction } from '..//store/tovarReduser';
import { changeKomentAction, addKomentAction} from '..//store/comentReduser';


 const AppMain = () =>{
    let [kors, setOpenKors] = useState(false)
    const dispatch = useDispatch()
    const tovarMain = useSelector(state  => state.tovar.sneakers)
    const pageSize = useSelector(state  => state.tovar.pageSize)
    const totalCount = useSelector(state  => state.tovar.totalCount)
    const currentPage = useSelector(state  => state.tovar.currentPage)
    const korzTovars = useSelector(state => state.tovar.sneakersKorz)
    const koments = useSelector(state=> state.coment.koments)
    const komentsValue = useSelector(state=> state.coment.newMess)
  
  
    const closeKorseFunck = () =>{
      setOpenKors(false)
    }
   const openKorz = () =>{
      setOpenKors(!kors)
     }
  
     const addTovar = (product) =>{
      dispatch(addCustomerAction(product))
     }
     const Removetovar =(producd)=>{
      dispatch(removeCustomerAction(producd))
     }
     const changeKoment =(text)=>{
       dispatch(changeKomentAction(text))
     }
  
    const addKoment = () =>{
      dispatch(addKomentAction())
     }
     const setCurrentPage = (pageNumber) =>{
        dispatch(paginationCustomerAction(pageNumber))
     }
  
    return (
      <div className ='app'>
  
          <Header openKorz={openKorz}/>
  
         <Main tovar={tovarMain} addTovar={addTovar}
         totalCount={totalCount} pageSize={pageSize}
         curentPage = {currentPage} setCurrentPage = {setCurrentPage}
         />
  
         {kors ? <Korz korz={korzTovars} removetovar={Removetovar}
          closeKorseFunck={closeKorseFunck}/>:null}
  
         <Koment 
          addKoment={addKoment} changeKoment={changeKoment}
           koments={koments} komentsValue={komentsValue}/>
         
      </div>
    );
   }

   export default AppMain