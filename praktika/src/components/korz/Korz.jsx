import React from "react";
import s from "./Korz.module.css"
import KorzKartochka from "./korzKartochka";

let Korz = (props) =>{

   let cartitems = props.korz.map(a => <KorzKartochka
    id = {a.id}
    title={a.title}
    price={a.price}
    imageUrl={a.imageUrl}
    removetovar={props.removetovar}
   />)

    return(
    <div>
    <div  className={s.korz}>
        <div className={s.korz_title}>
        <h1>Торбинка</h1>
        <h1 className={s.krestik} onClick={props.closeKorseFunck}>+</h1>
        </div>
       <div className={s.cartitems}>
       {cartitems}
        </div> 
    </div>
    </div>
    )
}
export default Korz