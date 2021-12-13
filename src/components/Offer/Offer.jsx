import './Offer.css'
import Item from "./Item";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getKeyAC, sortArrAC, sortArrQuickAC} from "../../redux/Ticket-reducer";
import Preloader from "../../Preloader/Preloader";


const Offer = () => {
    const dispatch = useDispatch()
    const { tickets, keyArr } = useSelector(state => state.TicketReducer)
    const [active,setActive] = useState(true)

    let copyTasks = tickets.filter(ticket => {
        if (keyArr.includes('all')) return ticket

        let isTrue = false

        keyArr.forEach(num => {
            const count = Number(num)
            if (ticket.segments[0].stops.length === count) isTrue = true
        })

        return isTrue
    })

    console.log('copyTasks', copyTasks.length)


    useEffect(() => {
        dispatch(getKeyAC())
    },[])

    const quick = () => {
        const test = copyTasks.sort((a,b) => {
            return a.segments[0].duration - b.segments[0].duration
        })
        dispatch(sortArrQuickAC(test))
        setActive(false)
    }

    const minPrice = () => {
         const test = copyTasks.sort((a,b) => {
          return a.price - b.price
       })
        dispatch(sortArrAC(test))
        setActive(true)
    }



    return (
        <div className="offer">
           <div className="btns">
               <button onClick={minPrice} className="btn left active" className={active ? 'btn left active': 'btn left'}>Самый дешевый</button>
               <button onClick={quick} className="btn right" className={active ? "btn right": "btn right active"}>Самый быстрый</button>
           </div>
            {
                copyTasks.length ? copyTasks.map(el => (
                    <Item key={el.id} {...el}/>
                )) : <Preloader/>
            }
            <button className="moreBtn">Показать еще 5 билетов!</button>
        </div>
    )
}

export default Offer;