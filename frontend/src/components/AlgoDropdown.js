import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const AlgoDropdown = ({ onSelectAlgo }) => {
  return (
    <DropdownButton onSelect={ onSelectAlgo } id="dropdown-algo" title="Algorithms">
      <Dropdown.Item href='#/BFS'>Breadth First Search</Dropdown.Item>
      <Dropdown.Item href="#/DFS">Depth First Search</Dropdown.Item>
    </DropdownButton>
  );
}

export default AlgoDropdown;