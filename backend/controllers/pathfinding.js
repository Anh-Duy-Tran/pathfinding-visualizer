const pathfinding = require('express').Router()

pathfinding.post('/init', (req, res) => {
  const data = req.body;

  const boardSize = data.size;
  const startNode = data.start;
  const endNode = data.end;
  const blocks = data.blocks;
  
  res.send({boardSize, startNode, endNode, blocks});
  res.send(data)
})

module.exports = pathfinding