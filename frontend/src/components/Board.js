import Row from "./Row";

const Board = ({ 
    placing, 
    blocks, 
    startPoint, 
    endPoint, 
    onSetPoint, 
    mouseOverTile, 
    mouseDown,
    mouseUp,
    visited,
    path
      }) => {

  const tileSize = 30;
  const boardDimensions = {
    height: Math.floor((window.innerHeight - 130) / tileSize) - 1,
    width: Math.floor(window.innerWidth / tileSize) -1
  }

  return (
    <div 
      id="Board"
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      height={boardDimensions.height}
      width={boardDimensions.width}
    >
    {
      Array.from(Array(boardDimensions.height)).map((x, i) => 
      <Row 
        key={i} 
        column={boardDimensions.width} 
        x={i} 
        placing={placing}
        blocks={blocks}
        startPoint={startPoint}
        endPoint={endPoint}
        onSetPoint={onSetPoint}
        mouseOverTile={mouseOverTile}
        visited={visited}
        path={path}
      ></Row>
      )
    }
    </div>
  );
}

export default Board