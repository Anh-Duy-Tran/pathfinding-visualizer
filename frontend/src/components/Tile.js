import assets from "../assets";

const Tile = ({ x, y, placing, blocks, startPoint, endPoint, onSetPoint }) => {
  let img = ''
  if (startPoint && x == startPoint.x && y == startPoint.y) {
    img = assets.start
  }
  if (endPoint && x == endPoint.x && y == endPoint.y) {
    img = assets.end
  }
  if (blocks.some(block => block.x == x && block.y == y)) {
    img = assets.block
  }
  
  let hoverImgURL = ''
  switch (placing) {
    case "start":
      hoverImgURL = assets.start;
      break;
    case "end":
      hoverImgURL = assets.end;
      break;
    default:
      hoverImgURL = assets.block;
      break;
  }

  return (
    <div 
      className="Tile" 
      x={x} 
      y={y} 
      onClick={onSetPoint} 
      style={{ 
        '--hover-img': `url(${hoverImgURL})`,
        'backgroundImage' : img !== '' ? `url(${img})` : ''
      }} 
    ></div>
  )
}

export default Tile