import { useTicTacToe } from "@features/tic-tac-toe/hooks/useTicTacToe";
import { GameStatus } from "@features/tic-tac-toe/TicTacToe.types";
import {
  Board,
  Cell,
  Container,
  ResetButton,
  Status,
  Title,
} from "@features/tic-tac-toe/TicTacToe.styles";

const STATUS_MESSAGES: Record<GameStatus, string> = {
  "player-turn": "Your move",
  "bot-turn": "Bot is thinking...",
  "player-win": "You win! 🎉",
  "bot-win": "Bot wins! 🤖",
  draw: "It's a draw",
};

const isGameOver = (status: GameStatus): boolean =>
  status === "player-win" || status === "bot-win" || status === "draw";

const TicTacToe = () => {
  const { board, status, winningLine, handleCellClick, reset } =
    useTicTacToe();

  return (
    <Container>
      <Title>Tic Tac Toe</Title>
      <Board>
        {board.map((cell, index) => (
          <Cell
            key={index}
            type="button"
            onClick={() => handleCellClick(index)}
            disabled={cell !== null || status !== "player-turn"}
            $isWinning={winningLine?.includes(index) ?? false}
          >
            {cell}
          </Cell>
        ))}
      </Board>
      <Status>{STATUS_MESSAGES[status]}</Status>
      {isGameOver(status) && (
        <ResetButton onClick={reset}>Play again</ResetButton>
      )}
    </Container>
  );
};

export default TicTacToe;
