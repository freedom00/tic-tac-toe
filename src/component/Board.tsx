import Square from "./Square";
import React from "react";

interface Props {
    xIsNext: boolean;
    squares: string[];
    onPlay: (nextSquares: string[]) => void;

}

export default function Board({xIsNext, squares, onPlay}: Props) {
    const handleClick = (i: number) => {
        console.log("clicked");
        if (calculateWinner() || squares[i]) {
            return;
        }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = 'X';
        } else {
            nextSquares[i] = 'O';
        }
        onPlay(nextSquares);
    };

    const calculateWinner = () => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner();
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }
    return (
        <>
            <div className={"status"}>{status}</div>
            <div className={"board-row"}>
                <Square onClick={() => handleClick(0)}>{squares[0]}</Square>
                <Square onClick={() => handleClick(1)}>{squares[1]}</Square>
                <Square onClick={() => handleClick(2)}>{squares[2]}</Square>
            </div>
            <div className={"board-row"}>
                <Square onClick={() => handleClick(3)}>{squares[3]}</Square>
                <Square onClick={() => handleClick(4)}>{squares[4]}</Square>
                <Square onClick={() => handleClick(5)}>{squares[5]}</Square>
            </div>
            <div className={"board-row"}>
                <Square onClick={() => handleClick(6)}>{squares[6]}</Square>
                <Square onClick={() => handleClick(7)}>{squares[7]}</Square>
                <Square onClick={() => handleClick(8)}>{squares[8]}</Square>
            </div>
        </>
    );
}
