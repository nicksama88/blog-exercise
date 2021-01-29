const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({})
  response.json(blogs)
})

blogsRouter.post('/', async (request, response) => {
  const body = request.body

  if (body.url === undefined || body.title === undefined) {
    response.status(400).end()
  } else {
    const blog = new Blog({
      author: body.author,
      likes: body.likes || 0,
      title: body.title,
      url: body.url,
    })
  
    const savedBlog = await blog.save()
    response.status(201).json(savedBlog.toJSON())
  }
})

module.exports = blogsRouter