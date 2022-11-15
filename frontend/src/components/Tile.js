import assets from '../assets/index'

const Tile = ({ x, y, placing, blocks, startPoint, endPoint, onSetPoint, mouseOverTile, visited, path }) => {
  let className = 'Tile'
  let hoverImgURL = ''
  
  if (startPoint && x == startPoint.x && y == startPoint.y) {
    className += ' start'
  } else
  if (endPoint && x == endPoint.x && y == endPoint.y) {
    className += ' end'
  } else
  if (blocks.some(block => block.x == x && block.y == y)) {
    className += ' block'
  } else
  if (path.some(v => v.x == x && v.y == y)) {
    className = 'Tile path'
  } else 
  if (visited.some(v => v.x == x && v.y == y)) {
    className += ' visited'
  }
  

  switch (placing) {
    case "start":
      hoverImgURL = assets.start;
      break;
    case "end":
      hoverImgURL = assets.end;
      break;
    case "block":
      hoverImgURL = assets.block;
      break;
  }

  return (
    <div 
      className={className}
      x={x} 
      y={y} 
      onClick={onSetPoint}
      onMouseOver={mouseOverTile}
      style={{  '--hover-img': `url(${hoverImgURL})` }}
    ></div>
  )
}

export default Tile