import Tile from "./Tile"

const Row = ({ column, x, placing, onSetStartPoint}) => {
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
          <Tile key={(x+1) * column + i} x={x} y={i} placing={placing} onSetStartPoint={onSetStartPoint}></Tile>)
      }
    </div>
  )
}

export default Row