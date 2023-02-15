
export default function Header(props){
    

    return(
        <header>
            <h2>Turn: {props.score}</h2>
            <h1>Fantasy Memory Game</h1>
            <h2>Best Score: {props.bestScore}</h2>

        </header>
    )}