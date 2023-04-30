import React from "react";
import s from './Kartochka.module.css'



let  Kartochka = ({id,imageUrl, title, price, tovaraddkorz}) =>{

const fgg = () =>{
  let product = {id,imageUrl, title, price}
  tovaraddkorz(product)
}

    return(
        <div>
             <div className={s.item}>
               <img src = {`${imageUrl}`}alt=""/>
               <div className="nazva_item">{title}</div>
               <div className={s.title_btn}>
               <p>Ціна: {price}грн</p>
              <button onClick={fgg} className={s.butto}>Купити</button>
               </div>
             </div>
      </div>
    )
}
export default  Kartochka