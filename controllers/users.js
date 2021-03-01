const usersRouter = require('express').Router()
const User = require('../models/user')
const Blog = require('../models/blog')
const bcrypt = require('bcrypt')

usersRouter.get('/', async (request, response) => {
  const users = await User.find({}).populate('blogs', { title: 1, author: 1, url: 1, likes: 1 })
  response.json(users)
})

usersRouter.get('/:id', async (request, response) => {
  const user = await User.findById(request.params.id)
    .populate('blogs', { title: 1, author: 1, url: 1, likes: 1 })
  if (user) response.json(user.toJSON())
  else response.status(404).end()
})

usersRouter.post('/', async (request, response) => {
  const body = request.body

  if (body.password.length < 4) {
    return response.status(400).json({
      error: 'password must be at least 3 characters long'
    })
  }

  const saltRounds = 10
  const passwordHash = await bcrypt.hash(body.password, saltRounds)

  const user = new User({
    username: body.username.toLowerCase(),
    name: body.name,
    passwordHash
  })

  const savedUser = await user.save()

  response.json(savedUser)
})

module.exports = usersRouter