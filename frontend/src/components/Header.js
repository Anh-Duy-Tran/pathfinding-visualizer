import AlgoDropdown from "./AlgoDropdown";

function Header({ onSelectAlgo, onClickSolve }) {
  return (
    <header>
      <h2>Pathfinding visualizer</h2>
      <AlgoDropdown></AlgoDropdown>
      <button onClick={onClickSolve}>Solve</button>
    </header>
  );
}

export default Header;