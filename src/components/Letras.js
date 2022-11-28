export default function Letras(props){
    return(
        props.alphabet.map((l) => 
        <button 
        onClick={() => buttonSelect(l)}
        className={`letterButton ${props.test? "disable" : "able"}
        ${props.selectButton.includes(l)? "disable" : ""}`}>
            {l}
        </button>)
    );

    function buttonSelect(letter){
        const inTheList = props.selectButton.includes(letter);

        if(!inTheList){
            props.setSelectButton([...props.selectButton, letter]);
        }
    }
}