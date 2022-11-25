export default function Jogo(props){
    return(
        <div className="gameView">
            <figure>
                <img src="/assets/forca0.png" />
            </figure>

            <button onClick={props.test? props.chooseWord : ""} className="chooseWord">
                Escolher Palavra
            </button>

            <div className="wordView">
                {props.word.map((l) => <strong> _</strong>)}
            </div>

        </div>
    );
}