import Tile from "./Tile"

const Row = ({ column, x, placing, blocks, startPoint, endPoint, onSetStartPoint, onSetEndPoint}) => {
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

  return (
    <div className="Row">
      {
        Array.from(Array(column)).map((y, i) =>
          <Tile
            key={(x+1) * column + i}
            x={x}
            y={i}
            blocks={blocks}
            startPoint={startPoint}
            endPoint={endPoint}
            placing={placing}
            onSetStartPoint={onSetStartPoint}
            onSetEndPoint={onSetEndPoint}
          ></Tile>)
      }
    </div>
  )
}

export default Row