import "./ItemDate.css";

function ItemDate(){
    const day = 24;
    const month = "May";
    const year = 1999;
    return (
        <div className="mfg-date">
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    )
}
export default ItemDate;