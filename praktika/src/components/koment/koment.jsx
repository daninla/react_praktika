import React, {  } from "react";
import s from './koment.module.css'
import Kom from "./Kom/Kom";



let Koment = (props) => {

let newPostElement= React.createRef()

 const changeKomend = (event) =>{
  let text = event.target.value
  props.changeKoment(text)
 }

 const addKom = () =>{
  props.addKoment()
  props.changeKoment('')
 }
 
 
 let komentElement = props.koments.map(k => <Kom koment={k.name}/>)
 
    return(
        <div>
        <div className={s.komentBlock}>
        <h2>Коментарі</h2>
        <button>Показати всі коментарі</button>
        
        <div className={s.komenti}>
            {komentElement}
            </div>
        <div className={s.koment_koshik}></div>
        <div className={s.pole_koment}>

            <textarea 
            onChange={changeKomend}
            ref = {newPostElement}
            placeholder="Коментар.."
            value = {props.komentsValue} 
            />

           <button onClick={addKom}>Відправити</button>
        </div>
        </div>
        </div>
    )
}
export default Koment