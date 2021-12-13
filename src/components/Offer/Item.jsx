import ticketLogo from "../../images/S7 Logo.png";

const Item = (props) => {
    const {price} = props

    const result = (data) => {                  // {result(props.segments[0].stops)} // кол-во пересадок
        const count = data.length                // {props.segments[0].stops + ''}    // название пересадок
        let text = 'нет пересадок';

        if (count === 1) text = `${count} пересадка`;
        if (count > 1) text = `${count} пересадки`;

        return <div className="ticketTitle">{text}</div>
    }

    const resultTime = (data) => {
        const time = data
        const hours = Math.ceil(time / 60)
        const minute = Math.ceil(time - (hours * 60))

        return <div className="time">{hours}ч {String(minute).slice(1,3)}м</div>
    }

    const dataTest = (data,duration) => {
        const date1 = new Date(data);                // 121
        const h = date1.getHours();                 // 121 / 60 = 2
        const m = date1.getMinutes();               // 121 - (2 * 60 (120)) = 1

        const resultWayTime = ((h * 60) + m) + duration;
        const resultWayHours = Math.ceil(resultWayTime / 60)
        const resultWayMinute = Math.ceil(resultWayTime - (resultWayHours * 60))
        const resultWayHoursToDay = resultWayHours / 24 |0
        const resultWayDaytoHours = Math.ceil(resultWayHoursToDay * 24)
        const resultWayDaytoHoursTwo = Math.ceil(resultWayHours - resultWayDaytoHours)

        return <div className="time">{h + ':' + m} - {resultWayDaytoHoursTwo + ':' + String(resultWayMinute).slice(1,3)}</div>
    }


    return (
        <div className="ticket">
            <div className="tickeLogo">
                <div className="price">{price} Р</div>
                <img className="tickeLogoImg" src={ticketLogo} alt=""/>
            </div>
            <div className="ticketInfo">
                <div className="wayInfo">
                    <div className="ticketTitle">{props.segments[0].origin} - {props.segments[0].destination}</div>
                    {dataTest(props.segments[0].date,props.segments[0].duration)}
                </div>
                <div className="wayInfo">
                    <div className="ticketTitle">В пути</div>
                    {resultTime(props.segments[0].duration)}
                </div>
                <div className="wayInfo">
                    {result(props.segments[0].stops)}
                    <div className="time">{props.segments[0].stops + ''}</div>
                </div>
            </div>
            <div className="ticketInfo">
                <div className="wayInfo">
                    <div className="ticketTitle">{props.segments[1].origin} - {props.segments[1].destination}</div>
                    {dataTest(props.segments[1].date,props.segments[1].duration)}
                </div>
                <div className="wayInfo">
                    <div className="ticketTitle">В пути</div>
                    {resultTime(props.segments[1].duration)}
                </div>
                <div className="wayInfo">
                    {result(props.segments[1].stops)}
                    <div className="time">{props.segments[1].stops + ''}</div>
                </div>
            </div>
        </div>
    )
}

export default Item;