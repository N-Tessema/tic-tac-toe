function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function App() {
  return (
    <div className="board">
      <div className="board-row">
        <Square value="X" />
        <Square value="O" />
        <Square value="X" />
      </div>
      <div className="board-row">
        <Square value="O" />
        <Square value="X" />
        <Square value="O" />
      </div>
      <div className="board-row">
        <Square value="X" />
        <Square value="O" />
        <Square value="X" />
      </div>
    </div>
  );
}