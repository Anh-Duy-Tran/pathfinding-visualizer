import Tile from "./Tile"

const Row = ({ column, x }) => {
  return (
    <div className="Row">
      {
        Array.from(Array(column)).map((y, i) =>
          <Tile key={(x+1) * column + i} x={x} y={i}></Tile>)
      }
    </div>
  )
}

export default Row