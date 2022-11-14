import Header from './components/Header';
import Info from './components/Info';
import Board from './components/Board';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {

  const [ algo, setAlgo ] = useState('')
  const [ placing, setPlacing ] = useState('start')

  const [ startPoint, setStartPoint ] = useState(null)
  const [ endPoint, setEndPoint ] = useState(null)
  const [ blocks, setBlocks ] = useState([])

  const onSelectAlgo = (e) => {
    console.log(e);
  }

  const onSetPoint = (e) => {
    const tile = e.currentTarget
    const coord = {
      x : tile.getAttribute('x'),
      y : tile.getAttribute('y')
    }
    if (startPoint && coord.x == startPoint.x && coord.y == startPoint.y) {
      setStartPoint(null)
      setPlacing('start')
      return;
    }

    if (endPoint && coord.x == endPoint.x && coord.y == endPoint.y) {
      setEndPoint(null)
      setPlacing('end')
      return;
    }
    
    const indexOfBlock = blocks.findIndex(block => block.x == coord.x && block.y == coord.y)
    console.log(indexOfBlock);
    if (indexOfBlock !== -1) {
      let newBlocks = [...blocks]
      newBlocks.splice(indexOfBlock, 1)
      setBlocks(newBlocks);
      return;
    }

    switch (placing) {
      case "start":
        setStartPoint(coord)
        setPlacing('end')
        break;
    
      case "end":
        setEndPoint(coord)
        setPlacing('block')
        break;

      case "block":
        setBlocks(blocks.concat({x : coord.x, y : coord.y}))
        console.log(blocks);
        break;
    }
  }

  return (
    <>
      <Header onSelectAlgo={onSelectAlgo}></Header>
      <Info></Info>
      <Board 
        placing={placing} 
        startPoint={startPoint} 
        endPoint={endPoint}
        blocks={blocks}
        onSetPoint={onSetPoint}
      ></Board>
    </>
  );
}

export default App;
