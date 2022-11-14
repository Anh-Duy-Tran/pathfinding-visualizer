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

  const onSelectAlgo = (e) => {
    console.log(e);
  }

  const onSetStartPoint = (e) => {
    const tile = e.currentTarget
    const coord = {
      x : tile.getAttribute('x'),
      y : tile.getAttribute('y')
    }
    
  }

  return (
    <>
      <Header onSelectAlgo={onSelectAlgo}></Header>
      <Info></Info>
      <Board placing={placing} startPoint={startPoint} endPoint={endPoint} onSetStartPoint={onSetStartPoint}></Board>
    </>
  );
}

export default App;
