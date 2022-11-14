import Tile from "./Tile"

const Row = ({ column, x }) => {
  return (
    <div class="Row">
      {
        Array.from(Array(column)).map((y) =>
          <Tile key = {y} x={x} y={y}></Tile>)
      }
    </div>
  )
}

export default Row