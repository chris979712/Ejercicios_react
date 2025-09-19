import { Square } from "./components/Square";
import {Turns} from "./utils/Constants.tsx";
import { Winner } from "./components/Winner.tsx";
import { Board } from "./components/Board.tsx";
import { GameUsability} from "./logic/board.tsx";

function App(){
    const { board, turn, winner, UpdateBoard, ResetGame } = GameUsability();
    return (
        <main className="board">
            <h1>Juego de gato</h1>
            <button onClick={ResetGame}>Resetear</button>
            <Board board={board} UpdateBoard={UpdateBoard}/>
            <section className="turn">
                <Square isSelected={turn === Turns.X}>{Turns.X}</Square>
                <Square isSelected={turn === Turns.O}>{Turns.O}</Square>
            </section>
            <Winner winner={winner} ResetGame={ResetGame} />
        </main>
    )
}

export default App;