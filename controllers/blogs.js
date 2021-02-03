const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs)
})

blogsRouter.get('/:id', async (request, response) => {
  const blog = await Blog.findById(request.params.id)
  await blog.populate('user', { username: 1, name: 1 })
  if (blog) response.json(blog.toJSON())
  else response.status(404).end()
})

blogsRouter.post('/', async (request, response) => {
  const body = request.body
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findById(decodedToken.id)

  if (body.url === undefined || body.title === undefined) {
    response.status(400).end()
  } else {
    const blog = new Blog({
      title: body.title,
      author: body.author,
      url: body.url,
      likes: body.likes || 0,
      user: user._id,
    })
  
    const savedBlog = await blog.save()
    user.blogs = user.blogs.concat(savedBlog._id)
    const savedUser = await user.save()
    console.log(savedBlog.user)
    console.log('saved user is', savedUser)
    savedBlog.user = {username: savedUser.username, id: savedUser._id.toString()}
    console.log(savedBlog)
    response.status(201).json(savedBlog.toJSON())
  }
})

blogsRouter.delete('/:id', async (request, response) => {
  // check for proper token
  const token = request.token
  const decodedToken = jwt.verify(token, process.env.SECRET)
  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }

  const blog = await Blog.findById(request.params.id)

  if (!blog) return response.status(404).json({ error: 'blog not found'})

  if(blog.user.toString() === decodedToken.id.toString()) {
    // must delete blog and also remove blog id from User's bloglist
    await Blog.findByIdAndRemove(blog._id)
    const foundUser = await User.findById(decodedToken.id)
    let foundBlogList = foundUser.blogs
    const blogListLen = foundBlogList.length
    const removeIndex = foundBlogList.findIndex(e => e.toString() === blog._id.toString())
    if (removeIndex === blogListLen - 1) {
      foundBlogList.pop()
    }
    else {
      foundBlogList = foundBlogList.slice(0, removeIndex)
        .concat(foundBlogList.slice(removeIndex + 1, blogListLen))
    }
    await User.findByIdAndUpdate(decodedToken.id, {blogs: foundBlogList}, {new:true})
    response.status(204).end()
  } else {
    response.status(400).json({ error: 'only user who added the blog may delete' })
  }
})

blogsRouter.put('/:id', async (request, response) => {
  const body = request.body

  const blogInputs = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  }

  const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blogInputs, { new: true })
  response.json(updatedBlog.toJSON())
})

module.exports = blogsRouter