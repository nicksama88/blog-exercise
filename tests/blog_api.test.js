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

test('a valid blog can be added', async () => {
  const newBlog = {
    title: 'test title',
    author: 'author',
    url: 'url',
    likes: 1
  }

  await api.post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

  const blogsAfterAdd = await helper.blogsInDb()
  expect(blogsAfterAdd).toHaveLength(helper.initialBlogs.length + 1)

  const titles = blogsAfterAdd.map(b => b.title)
  expect(titles).toContain(
    'test title'
  )
})

test('if likes is missing, then will be set to 0', async () => {
  const newBlog = {
    title: 'test title',
    author: 'author',
    url: 'url'
  }

  await api.post('/api/blogs').send(newBlog)

  const blogsAfterAdd = await helper.blogsInDb()
  const addedBlog = blogsAfterAdd[blogsAfterAdd.length - 1]
  expect(addedBlog.likes).toEqual(0)
})

test('if title or url are missing, responds with status code 400', async () => {
  const newBlog = {
    author: 'author'
  }
  
  await api.post('/api/blogs').send(newBlog)
    .expect(400)
})

afterAll(() => {
  mongoose.connection.close()
})