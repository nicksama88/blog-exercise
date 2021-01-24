const nodemon = require("nodemon")

const dummy = (blogsArray) => {
  return 1
}

const totalLikes = (blogsArray) => {
  return blogsArray
    .map(item => item.likes)
    .reduce((sum, item) => sum + item, 0)
}

const favoriteBlog = blogsArray => {
  if (blogsArray.length === 0) {
    return {}
  }
  const likeList = blogsArray.map(blog => blog.likes)
  const mostLikes = Math.max(...likeList)
  const favoriteIndex = likeList.indexOf(mostLikes)
  const targetObject = blogsArray[favoriteIndex]
  return {
    title: targetObject.title,
    author: targetObject.author,
    likes: targetObject.likes,
  }
}

const mostBlogs = (blogsArray) => {
  if (blogsArray.length === 0) {
    return {}
  }

  const blogHash = {}
  blogsArray.forEach((blog) => {
    blogHash[blog.author] === undefined
    ? blogHash[blog.author] = 1
    : blogHash[blog.author] += 1
  })

  const most = {
    author: null,
    blogs: 0
  }

  Object.entries(blogHash).forEach( ([author, blogs]) => {
    if (most.blogs < blogs) {
      most.author = author
      most.blogs = blogs
      }
    }
  )

  return most
}

const mostLikes = (blogsArray) => {
  if (blogsArray.length === 0) {
    return {}
  }

  const likeHash = {}
  blogsArray.forEach((blog) => {
    likeHash[blog.author] === undefined
    ? likeHash[blog.author] = blog.likes
    : likeHash[blog.author] += blog.likes
  })

  const most = {
    author: null,
    likes: 0
  }

  Object.entries(likeHash).forEach(([author, likes]) => {
    if (most.likes < likes) {
      most.author = author
      most.likes = likes
    }
  })

  return most

}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}