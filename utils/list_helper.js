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

module.exports = {
  dummy, totalLikes, favoriteBlog
}