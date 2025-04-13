import { useState } from "react";
import PropTypes from "prop-types";
import GameLayout from "./GameLayout";
import Field from "../Field/Field";
import Information from "../Information/Information";

const WIN_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export default function Game() {
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [isGameEnded, setIsGameEnded] = useState(false);
    const [isDraw, setIsDraw] = useState(false);
    const [field, setField] = useState(Array(9).fill(""));

    const handleCellClick = (index) => {
        if (field[index] !== "" || isGameEnded) return;

        const newField = [...field];
        newField[index] = currentPlayer;
        setField(newField);

        if (checkWin(newField, currentPlayer)) {
            setIsGameEnded(true);
            return;
        }

        if (checkDraw(newField)) {
            setIsDraw(true);
            return;
        }

        setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    };

    const checkWin = (field, player) => {
        return WIN_PATTERNS.some((pattern) =>
            pattern.every((index) => field[index] === player),
        );
    };

    const checkDraw = (field) => {
        return field.every((cell) => cell !== "");
    };

    const handleRestart = () => {
        setCurrentPlayer("X");
        setIsGameEnded(false);
        setIsDraw(false);
        setField(Array(9).fill(""));
    };

    return (
        <GameLayout>
            <Information
                currentPlayer={currentPlayer}
                isGameEnded={isGameEnded}
                isDraw={isDraw}
            />
            <Field field={field} handleCellClick={handleCellClick} />
            <button className="restart-button" onClick={handleRestart}>
                Начать заново
            </button>
        </GameLayout>
    );
}

Game.propTypes = {
    children: PropTypes.node,
};
