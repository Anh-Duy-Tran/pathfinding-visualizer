import Header from './components/Header';
import Info from './components/Info';
import Board from './components/Board';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App({ boardDimensions }) {

  const [ algo, setAlgo ] = useState('')

  const onSelectAlgo = (e) => {
    console.log(e);
  }

  const onClickVisualize = (e) => {

  }

  return (
    <>
      <Header onSelectAlgo={onSelectAlgo} onClickVisualize={onClickVisualize}></Header>
      <Info></Info>
      <Board boardDimensions={boardDimensions}></Board>
    </>
  );
}

export default App;
