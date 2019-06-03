const LISTEN_PORT = 3000

const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(
  bodyParser.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS')
  next()
})

const initialState = {
  friends: [
    {
      id: Math.floor(Math.random() * 1000),
      name: 'Ross',
      age: 30
    },
    {
      id: Math.floor(Math.random() * 1000),
      name: 'Rachel',
      age: 27
    }
  ]
}

const state = {
  data: initialState
}

app.listen(LISTEN_PORT, () => {
  console.log(`App runntng at: http://localhost:${LISTEN_PORT}`)
})

app.get('/', (_, res) => {
  res.json(state)
})

app.post('/', (req, res) => {
  state.data.friends.push({
    id: Math.floor(Math.random() * 1000),
    ...req.body
  })
  res.json(state)
})

app.put('/', (req, res) => {
  state.data.friends.forEach((friend, index) => {
    if (friend.id === req.body.id) {
      state.data.friends[index] = {
        ...req.body
      }
    }
  })
  res.send(state)
})

app.delete('/', (req, res) => {
  state.data.friends = state.data.friends.filter(friend => friend.id !== req.body.id)
  res.send(state)
})