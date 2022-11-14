import assets from "../assets";

const Tile = ({ x, y, placing, blocks, startPoint, endPoint, onSetStartPoint, onSetEndPoint }) => {
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
  let event
  switch (placing) {
    case "start":
      hoverImgURL = assets.start;
      event = onSetStartPoint
      break;
    case "end":
      hoverImgURL = assets.end;
      event = onSetEndPoint
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
      onClick={event} 
      style={{ 
        '--hover-img': `url(${hoverImgURL})`,
        'backgroundImage' : img !== '' ? `url(${img})` : ''
      }} 
    ></div>
  )
}

export default Tile