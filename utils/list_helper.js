const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const likes = blogs.reduce((acc, item) => {
    return acc + item.likes
  }, 0)
  return likes
}

const favoriteBlog = (blogs) => {
  const favorite = blogs.reduce((best, item) => {
    if (best.likes > item.likes) {
      return best
    } else {
      return item
    }
  })
  delete favorite._id
  delete favorite.url
  delete favorite.__v
  return favorite
}

const mostBlogs = (blogs) => {
  const authorBlog = new Map()
  blogs.forEach(element => {
    const prevVal = authorBlog.get(element.author) ?? 0
    const newVal = prevVal + 1
    authorBlog.set(element.author, newVal)
  })

  let result = {
    author: '',
    blogs: 0
  }

  authorBlog.forEach((value, key) => {
    if (value > result.blogs) {
      result.author = key
      result.blogs = value
    }
  })

  return result
}

module.exports = {
  dummy, totalLikes, favoriteBlog, mostBlogs
}