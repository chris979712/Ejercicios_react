import { Square } from "./Square";

type SquareValue = 'X' | 'O' | null;

type BoardProps = {
    board: SquareValue[],
    UpdateBoard: (index:number) => void
}

export const Board = ({ board, UpdateBoard}: BoardProps) => {
    return (
        <section className="game">
        {board.map((value, index) => (
            <Square key={index} index={index} updateBoard={() => UpdateBoard(index)}>
            {value}
            </Square>
        ))}
        </section>
    );
};