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

  const favorite = blogsArray.reduce( (accumulator, current) => 
    accumulator.likes > current.likes
    ? accumulator
    : current
  )

  return {
    title: favorite.title,
    author: favorite.author,
    likes: favorite.likes
  }
}

const mostBlogs = (blogsArray) => {
  if (blogsArray.length === 0) {
    return {}
  }

  const authorBlogCountObj = blogsArray // object of {author: # of blogs}
    .reduce( (accumulator, current) => {
      accumulator[current.author] === undefined
      ? accumulator[current.author] = 1
      : accumulator[current.author] += 1
      return accumulator
    }, {})

  const most = Object.entries(authorBlogCountObj)
    .map( ([key, value]) => {
      return {
        author: key,
        blogs: value
      }
    })
    .reduce( (accumulator, current) => 
      current.blogs > accumulator.blogs
      ? current
      : accumulator
    )

  return most
}

const mostLikes = (blogsArray) => {
  if (blogsArray.length === 0) {
    return {}
  }

  const likeCountObj = blogsArray
    .reduce( (accumulator, current) => {
      accumulator[current.author] === undefined
      ? accumulator[current.author] = current.likes
      : accumulator[current.author] += current.likes
    return accumulator
    }, {})
  
  const most = Object.entries(likeCountObj)
    .map( ([key, value]) => {
      return(
        {
          author: key,
          likes: value
        }
      )}
    )
    .reduce( (accumulator, current) => 
      current.likes > accumulator.likes
      ? current
      : accumulator
    )

  return most
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}