import "./Item.css";
function Item(props){
    const itemName = props.name;
    return (
        <p className="item">{itemName}</p>
    )
}
export default Item;