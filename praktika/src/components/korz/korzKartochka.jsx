import React from "react";
import s from './Korz.module.css'



let KorzKartochka =({id,imageUrl, title, price, removetovar}) =>{

const ggg = () =>{
 let producd = id
  removetovar(producd)
}

    return(
        <div>
          <div className={s.item}>
            <div className={s.item_block}>
            <img src = {`${imageUrl}`}alt=""/>
           <h2 onClick={ggg}>+</h2>
          </div>
           
            <div className={s.nazva_item}>{title}</div>
            <div className={s.title_block}>
            <p>Ціна: {price}грн</p>
            <button  className={s.butto}>Купити</button>
            </div>
          </div>
      </div>
    )
}
export default  KorzKartochka