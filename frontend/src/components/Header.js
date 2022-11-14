import AlgoDropdown from "./AlgoDropdown";

function Header({ onSelectAlgo }) {
  return (
    <header>
      <h2>Pathfinding visualizer</h2>
      <AlgoDropdown></AlgoDropdown>
    </header>
  );
}

export default Header;