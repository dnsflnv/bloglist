const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  const likes = blogs.reduce((acc, item) => {
    return acc + item.likes
  }, 0)
  return likes
}

module.exports = {
  dummy, totalLikes
}