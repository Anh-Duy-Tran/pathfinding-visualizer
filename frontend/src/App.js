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

  const onSetStartPoint = (e) => {
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
    
    setStartPoint(coord)
    setPlacing('end')
  }

  const onSetEndPoint = (e) => {
    const tile = e.currentTarget
    const coord = {
      x : tile.getAttribute('x'),
      y : tile.getAttribute('y')
    }

    if (endPoint && coord.x == endPoint.x && coord.y == endPoint.y) {
      setEndPoint(null)
      setPlacing('end')
      return;
    }
    
    setEndPoint(coord)
    setPlacing('block')
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
        onSetStartPoint={onSetStartPoint}
        onSetEndPoint={onSetEndPoint}
      ></Board>
    </>
  );
}

export default App;
