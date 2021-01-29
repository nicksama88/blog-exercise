const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

beforeEach(async () => {
  await Blog.deleteMany({})

  const blogObjects = helper.initialBlogs
    .map(blog => new Blog(blog))
  const promiseArray = blogObjects.map(blog => blog.save())
  await Promise.all(promiseArray)
})

test('blogs are returned as JSON', async () => {

  await api
    .get('/api/blogs')
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('all blogs are returned', async () => {

  const blogs = await api.get('/api/blogs')
  
  expect(blogs.body).toHaveLength(helper.initialBlogs.length)
})

test('blog unique identity property of blogs is named id', async () => {

  const blogs = await api.get('/api/blogs')
  const contents = blogs.body

  expect(contents[0].id).toBeDefined()
  
})

afterAll(() => {
  mongoose.connection.close()
})