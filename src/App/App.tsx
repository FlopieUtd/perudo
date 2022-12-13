import React, { useState, useCallback, useEffect } from "react";
import "./App.css";
import { Die } from "../Die/Die";

const MAX_NUMBER_OF_DICE = 5;

export type DieValue = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export const App = () => {
  const [sessionStartTime, setSessionStartTime] = useState<string | null>(null);
  const [dice, setDice] = useState<DieValue[]>([0, 0, 0, 0, 0]);
  const [round, setRound] = useState(1);
  const [roll, setRoll] = useState(0);
  const amountOfDice = dice.length;
  const isGameOver = !dice.length;
  const canAdd = amountOfDice !== 0 && amountOfDice < MAX_NUMBER_OF_DICE;
  const canRemove = amountOfDice !== 0;
  const canReset = amountOfDice !== 5;

  const handleRoll = useCallback(() => {
    setDice(dice.map(() => (Math.floor(Math.random() * 6) + 1) as DieValue));
    setRoll(roll + 1);
  }, [dice, roll]);

  const handleRemove = useCallback(() => {
    setDice(new Array(amountOfDice - 1).fill(0));
  }, [amountOfDice]);

  const handleAdd = useCallback(() => {
    setDice(new Array(amountOfDice + 1).fill(0));
  }, [amountOfDice]);

  const handleReset = useCallback(() => {
    setDice(new Array(MAX_NUMBER_OF_DICE).fill(0));
    setRound(round + 1);
    setRoll(0);
  }, [round]);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    setSessionStartTime(`${hours}:${String(minutes).padStart(2, "0")}`);
  }, []);

  return (
    <div className="app">
      <div className="container">
        <div className="dice">
          {dice.map((dieValue) => (
            <Die dieValue={dieValue} />
          ))}
          {isGameOver && <div className="game-over">Game over!</div>}
        </div>
        <div className="buttons">
          <button className="button" onClick={handleRoll} disabled={isGameOver}>
            Roll
          </button>
          <div className="lower-buttons">
            <button
              className="button"
              onClick={handleRemove}
              disabled={!canRemove}
            >
              Remove
            </button>
            <button className="button" onClick={handleAdd} disabled={!canAdd}>
              Add
            </button>
            <button
              className="button"
              onClick={handleReset}
              disabled={!canReset}
            >
              Reset
            </button>
          </div>
        </div>
        <div className="stats-container">
          <div className="session start time">
            Session started at {sessionStartTime}
          </div>
          <div className="round">Round {round}</div>
          {roll ? <div className="roll">Roll {roll}</div> : null}
        </div>
      </div>
    </div>
  );
};
