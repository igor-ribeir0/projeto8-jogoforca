export default function Letras(props){
    return(
        <button className={`letterButton ${props.test? "" : "able"}`}>
            {props.letter}
        </button>
    );
}