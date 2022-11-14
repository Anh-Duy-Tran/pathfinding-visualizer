import Row from "./Row";

const Board = ({ placing, blocks, startPoint, endPoint, onSetPoint }) => {
  const tileSize = 30;
  const boardDimensions = {
    row: Math.floor((window.innerHeight - 130) / tileSize) - 1,
    column: Math.floor(window.innerWidth / tileSize) -1
  }

  return (
    <div id="Board">
    {
      Array.from(Array(boardDimensions.row)).map((x, i) => 
      <Row 
        key={i} 
        column={boardDimensions.column} 
        x={i} 
        placing={placing}
        blocks={blocks}
        startPoint={startPoint}
        endPoint={endPoint}
        onSetPoint={onSetPoint}
      ></Row>
      )
    }
    </div>
  );
}

export default Board