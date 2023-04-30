import React from "react";
import s from "./Kom.module.css"



let Kom = (props) => {

    return(
        <div className={s.Kom}>
      {props.koment}
        </div>

    )
}
export default Kom
