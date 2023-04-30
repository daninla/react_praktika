import React from "react";
import s from './main.module.css'
import Kartochka from "./Kartochka/Kartochka";


let Main = (props) => {


  let kartochkaElement =  props.tovar.map(b => <Kartochka 
    id ={b.id}
    title={b.title}
    price={b.price}
    imageUrl={b.imageUrl}
    tovaraddkorz={props.addTovar}
    />)
    
    let pagesCount = Math.ceil(props.totalCount / props.pageSize)

    let pages = []

    for (let i = 1; i <= pagesCount; i++){
      pages.push(i)
    }

    return(
        <div>
        <div className={s.baza}>
           <div className={s.main_titleBlock}>
            <h2>Найкращі кросівки</h2>
           <input placeholder="Пошук..." type="text"/>
           </div>
           <div className={s.main_itemsBlock}>
         {kartochkaElement}
           </div>
           <div className={s.pagination_button}>

          {
          pages.map((p)=>(
            <span className={props.currentPage === p ? 'true': 'false'} 
              onClick={()=> {props.setCurrentPage(p) }}>
                {p}
            </span>
          ))
          }
            </div>
        </div>
        </div>
    )
}

export default Main