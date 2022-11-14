const initBoard = (board, visited, size, blocks) => {
  const height = size.height;
  const width = size.width;

  for (let i = 0; i < height; i++) {
    let row = [];
    let rowVisited = [];
    for (let j = 0; j < width; j++) {
      row.push(0);
      rowVisited.push(false);
    }
    board.push(row);
    visited.push(rowVisited);
  }

  blocks.forEach(block => {
    board[block.x][block.y] = 1
  });
}

const checkInBound = (point, bound) => {
  if (point.x < 0 || point.y < 0 || point.x >= bound.height || point.y >= bound.width) {
    return false;
  }
  return true;
}

const solveBFS = (data) => {
  const boardSize = data.size;
  const blocks = data.blocks
  let board = [];
  let visited = [];

  const directions = [
    {x : 1, y : 0},
    {x : 0, y : -1},
    {x : 0, y : 1},
    {x : -1, y : 0}
  ];

  const start = data.start;
  initBoard(board, visited, boardSize, blocks);
  
  const end = data.end;
  
  let queue = [start];
  let queueLog = [];
  let found = false;
  
  visited[start.x][start.y] = true;

  while (queue.length !== 0 && !found) {
    queueLog.push(queue);
    let pop = [...queue];
    queue = [];

    pop.forEach(point => {
      directions.forEach(d => {
        const newPoint = {
          x : point.x + d.x,
          y : point.y + d.y
        };
        
        if (!checkInBound(newPoint, boardSize)) {
          return;
        }

        if (visited[newPoint.x][newPoint.y] || board[newPoint.x][newPoint.y] === 1) {
          return;
        }

        visited[newPoint.x][newPoint.y] = true;
        if (end.x === newPoint.x && end.y === newPoint.y) {
          found = true;
        }
        queue.push(newPoint);
      })
    })
  }

  if (queue.length !== 0) {
    queueLog.push(queue);
  }

  return {log : queueLog, found : found};
}

module.exports = {solveBFS}
