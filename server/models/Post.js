module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    article: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  })
  return Post
}
