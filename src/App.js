import {useState} from 'react';
import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Chute from './components/Chute';
import palavras from './palavras';

export default function App() {
  let erro;
  const [word, setWord] = useState([]);
  const [test, setTest] = useState(true);
  const alphabet = 
  [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  return (
    <div className="global">
      <main>
        <div className="content">
          <Jogo chooseWord={chooseWord} word={word} test={test}/>

          <div className="words">
            <div className="breakWord">
              {alphabet.map((letter) => <Letras letter = {letter} test={test}/>)}
            </div>

            <Chute />

          </div>

        </div>

      </main>

    </div>
  );

  function chooseWord(){
    erro = 0;
    const prizeDraw = palavras[Math.floor(Math.random() * palavras.length)];
    setWord(prizeDraw.split(""));
    setTest(false);
  }
}