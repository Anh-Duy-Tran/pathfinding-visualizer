import axios from 'axios'

const url = 'http://localhost:3001/api'

const solveBoard = (data) => {
  const request = axios.post(url + '/init', data);
  return request.then(res => res.data);
}

const services = { solveBoard }
export default services