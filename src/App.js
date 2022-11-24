import Jogo from './components/Jogo';
import Letras from './components/Letras';
import Chute from './components/Chute';

export default function App() {
  const alphabet = 
  [
    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
    "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
  ];

  return (
    <div className="global">
      <main>
        <div className="content">
          <Jogo />

          <div className="words">
            <div className="breakWord">
              {alphabet.map((letter) => <Letras letter = {letter} />)}
            </div>

            <Chute />

          </div>

        </div>

      </main>

    </div>
  );
}