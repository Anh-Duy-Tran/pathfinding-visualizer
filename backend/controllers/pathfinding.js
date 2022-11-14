const pathfinding = require('express').Router()
const solver = require('../logic/pathfinding')

pathfinding.post('/init', (req, res) => {
  const data = req.body;
  const algo = data.algo;
  
  if (algo === 'BFS') {
    res.json(solver.solveBFS(data))
    return;
  }

  res.send('Not found algo');
  return;
})

module.exports = pathfinding