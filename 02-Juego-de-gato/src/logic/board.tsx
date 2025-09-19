import confetti from 'canvas-confetti';
import { useState } from "react";
import {Turns, WINNER_COMBOS} from "../utils/Constants.tsx";

export function GameUsability(){
    const [board,setBoard]= useState(Array(9).fill(null));
    const [turn, setTurn] = useState(Turns.X);
    const [winner, setWinner] = useState<string>(' ');

    const UpdateBoard = (index:number) => {
        if(!board[index] && winner === ' ')
        {
            const NewBoard = [...board];
            NewBoard[index] = turn;
            setBoard(NewBoard)
            const newTurn = turn === Turns.X ? Turns.O : Turns.X;
            setTurn(newTurn);
            const newWinner = CheckWinner(NewBoard);
            if(newWinner)
            {
                confetti();
                setWinner(newWinner);
            }else if(CheckEndGame(NewBoard)){
                setWinner('Empate');
            }
        }
    }

    const ResetGame = () => {
        setBoard(Array(9).fill(null));
        setTurn(Turns.X);
        setWinner(' ');
    }

    const CheckWinner = (boardToChek:any) => {
        for (const combo of WINNER_COMBOS) {
            const [a, b, c] = combo;
            if (
            boardToChek[a] &&
            boardToChek[a] === boardToChek[b] &&
            boardToChek[b] === boardToChek[c]
            ) {
            return boardToChek[a];
            }
        }
    };

    const CheckEndGame = (newBoard:any[]) => {
        return newBoard.every((square) => square !== null);
    }

    return {
        board,
        turn,
        winner,
        UpdateBoard,
        ResetGame
    };
}
