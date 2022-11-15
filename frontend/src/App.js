import Header from './components/Header';
import Info from './components/Info';
import Board from './components/Board';

import { useState } from 'react';

import services from './services/pathfinding'

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  const timing = 100;

  const [ algo, setAlgo ] = useState('')
  const [ placing, setPlacing ] = useState('start')

  const [ startPoint, setStartPoint ] = useState(null)
  const [ endPoint, setEndPoint ] = useState(null)
  const [ blocks, setBlocks ] = useState([])

  const [ holding, setHolding ] = useState(false)
  const [ visited, setVisited ] = useState([])

  const [ doneVisiting, setDoneVisiting ] = useState(false)
  const [ path, setPath ] = useState([]) 

  const onSelectAlgo = (e) => {
    
  }

  const onSetPoint = (e) => {
    const tile = e.currentTarget
    const coord = {
      x : tile.getAttribute('x'),
      y : tile.getAttribute('y')
    }
    if (startPoint && coord.x == startPoint.x && coord.y == startPoint.y) {
      setStartPoint(null)
      tile.classList.remove('start')
      setPlacing('start')
      return;
    }
    
    if (endPoint && coord.x == endPoint.x && coord.y == endPoint.y) {
      setEndPoint(null)
      tile.classList.remove('end')
      setPlacing('end')
      return;
    }
    
    const indexOfBlock = blocks.findIndex(block => block.x == coord.x && block.y == coord.y)
    
    if (indexOfBlock !== -1) {
      let newBlocks = [...blocks]
      newBlocks.splice(indexOfBlock, 1)
      setBlocks(newBlocks);
      return;
    }

    switch (placing) {
      case "start":
        setStartPoint(coord)
        tile.classList.add(placing)
        setPlacing('end')
        break;
        
      case "end":
        setEndPoint(coord)
        tile.classList.add(placing)
        setPlacing('block')
        break;
        
      case "block":
        setBlocks(blocks.concat({x : coord.x, y : coord.y}))
        tile.classList.add(placing)
        
        break;
    }
  }

  const mouseOverTile = (e) => {
    if (!holding || placing !== 'block') {
      return;
    }
    const tile = e.currentTarget
    const coord = {
      x : tile.getAttribute('x'),
      y : tile.getAttribute('y')
    }

    setBlocks(blocks.concat({x : coord.x, y : coord.y}))
    return;
  }

  const onClickSolve = (e) => {
    const board = document.getElementById("Board");
    const size = {
      height : Number(board.getAttribute('height')),
      width : Number(board.getAttribute('width'))
    }

    const data = {
      size : size,
      start : startPoint,
      end : endPoint,
      blocks : blocks,
      algo : "BFS"
    }

    console.log(data);
    services
    .solveBoard(data)
    .then(res => {
      const queueLog = res.log;
      const found = res.found;
      

      for (let i = 0; i < queueLog.length; i++) {
        setTimeout(() => {
          let newVisited = []
          for (let j = 0; j <= i; j++) {
            newVisited = newVisited.concat(queueLog[j])
          }
          setVisited(newVisited)
        }, timing * (i+1));
      }

      if (found) {
        const path = res.path;
        setTimeout(() => {
          for (let i = 0; i < path.length; i++) {
            setTimeout(() => {
              let temp = [...path]
              setPath(temp.splice(0, i+1))
            }, timing/2 * (i + 1))
          }
        }, (timing * (queueLog.length+2)))
      }
    })
  }

  console.log(path);

  const mouseDown = (e) => {
    setHolding(true);
  }

  const mouseUp = (e) => {
    setHolding(false);
  }

  return (
    <>
      <Header 
        onSelectAlgo={onSelectAlgo}
        onClickSolve={onClickSolve}
      ></Header>
      <Info></Info>
      <Board 
        placing={placing} 
        startPoint={startPoint} 
        endPoint={endPoint}
        blocks={blocks}
        onSetPoint={onSetPoint}
        mouseOverTile={mouseOverTile}
        mouseDown={mouseDown}
        mouseUp={mouseUp}
        visited={visited}
        path={path}
      ></Board>
    </>
  );
}

export default App;
