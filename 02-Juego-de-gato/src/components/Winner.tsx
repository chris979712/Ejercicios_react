import { Square } from "./Square";

type WinnerProps = {
    winner?: string,
    ResetGame: () => void,
}

export const Winner = ({ winner, ResetGame }: WinnerProps) => {
    if (winner === ' ') return;
    const winnerText = winner === 'Empate' ? 'Empate' : 'Ganó: ';
    return (
        <section className="winner">
            <div className="text">
                <h2>
                    {winnerText}
                </h2>
                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>
                <footer>
                    <button onClick={ResetGame}>Resetear</button>
                </footer>
            </div>
        </section>
    );
}