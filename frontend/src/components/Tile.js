import assets from "../assets";

const Tile = ({ x, y, placing, onSetStartPoint}) => {
  let imgURL = ''
  switch (placing) {
    case "start":
      imgURL = assets.start;
      break;
    case "end":
      imgURL = assets.end;
      break;
    default:
      imgURL = assets.block;
      break;
  }

  // `url(${images[gameState]})`

  return (
    <div 
      className="Tile" 
      x={x} 
      y={y} 
      onClick={onSetStartPoint} 
      style={{'--hover-img': `url(${imgURL})` }} 
    ></div>
  )
}

export default Tile