import './Filter.css'
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getValueKeyAC} from "../../redux/Ticket-reducer";


const Filter = () => {

    const { keyArr } = useSelector(state => state.TicketReducer)
    const dispatch = useDispatch()
    console.log('keyArr', keyArr)

    const filterHandler = (key) => {
        dispatch(getValueKeyAC(key))
    }

    return (
        <div className="filter">
            <h3 className="filterTitle">Количество пересадок</h3>
            <div className="filterItem">
                <input checked={keyArr.includes('all')} onChange={(e) => filterHandler('all')} type="checkbox" id='one'/>
                <label className='filterItemTitle' htmlFor="one">Все</label>
                {/*<button onClick={() => filterHandler('all')}>all</button>*/}
            </div>
            <div className="filterItem">
                <input checked={keyArr.includes('0')} onChange={(e) => filterHandler('0')} type="checkbox" id='two'/>
                <label className='filterItemTitle' htmlFor="two">без пересадок</label>
                {/*<button onClick={() => filterHandler('stop-0')}>без пересадок</button>*/}
            </div>
            <div className="filterItem">
                <input checked={keyArr.includes('1')} onChange={(e) => filterHandler('1')} type="checkbox" id='three'/>
                <label className='filterItemTitle' htmlFor="three">1 пересадка</label>
                {/*<button onClick={() => filterHandler('stop-1')}>1 пересадка</button>*/}
            </div>
            <div className="filterItem">
                <input checked={keyArr.includes('2')} onChange={(e) => filterHandler('2')} type="checkbox" id='four'/>
                <label className='filterItemTitle' htmlFor="four">2 пересадки</label>
                {/*<button onClick={() => filterHandler('stop-2')}>2 пересадки</button>*/}
            </div>
            <div className="filterItem">
                <input checked={keyArr.includes('3')} onChange={(e) => filterHandler('3')} type="checkbox" id='five'/>
                <label className='filterItemTitle' htmlFor="five">3 пересадки</label>
                {/*<button onClick={() => filterHandler('stop-3')}>3 пересадки</button>*/}
            </div>
        </div>
    )
}

export default Filter;