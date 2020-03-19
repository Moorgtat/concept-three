module.exports = (sequelize, DataTypes) => {
  const Upfile = sequelize.define('Upfile', {
    title: DataTypes.STRING,
    article: DataTypes.STRING,
    photo: DataTypes.STRING,
  })
  return Upfile
}
