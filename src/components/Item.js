import React, {useState} from "react";
import "./Item.css";

function Item(props){
    // const pinu = useState("Prachi");
    // const name = pinu[0];
    // const setName = pinu[1]
    // console.log("===", pinu);
    const itemName = props.name;
    const [title, setTitle] = useState(itemName)
    function clickHandler(){
        setTitle("Popcorn");
        console.log("Add to Cart");
    } 
    return (
        <div className="parentItem">
            <p className="item">{title}</p>
            {/* {props.children} */}
            <button onClick={clickHandler}>Add To Card</button>
        </div>
    )
}
export default Item;