import Tile from "./Tile"

const Row = ({ column, x, placing, blocks, startPoint, endPoint, onSetPoint, mouseOverTile, visited, path }) => {
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
            onSetPoint={onSetPoint}
            mouseOverTile={mouseOverTile}
            visited={visited}
            path={path}
          ></Tile>)
      }
    </div>
  )
}

export default Row