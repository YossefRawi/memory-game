
import { useState,useEffect } from "react"



export default function Card(props){
const [cardClicked, setCardClicked] = useState(false)
const handleClick = () => {
        // clicked twice so you lose
        if (cardClicked) {
        alert(`${props.name} was already selected!`);
        props.setReset(true);
        return;
        }

        props.incrementScore();
        setCardClicked(true);
        props.shuffleCards();
        };

      // reset all cards wasCliked
        useEffect(() => {
        if (props.reset) {
        setCardClicked(false);
        }
        }, [props.reset]);



return(
        <div className={props.name}
                onClick={
                () => {handleClick()}}>
                <img src={props.image}/>
                <h3>{props.name}</h3>
        </div>
)}