import Row from "./Row";

const Board = ({ placing, startPoint, endPoint, onSetStartPoint}) => {
  const tileSize = 30;
  const boardDimensions = {
    row: Math.floor((window.innerHeight - 130) / tileSize) - 1,
    column: Math.floor(window.innerWidth / tileSize) -1
  }

  return (
    <div id="Board">
    {
      Array.from(Array(boardDimensions.row)).map((x, i) =>  {
        return <Row key={i} column={boardDimensions.column} x={i} placing={placing} onSetStartPoint={onSetStartPoint}></Row>
      }
      )
    }
    </div>
  );
}

export default Board