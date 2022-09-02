const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
  });

  user.associate = (model) => {
    user.hasOne(model.BlogPosts, { foreignKey: 'userId', as: 'blogposts' });
  };

  return user;
};

module.exports = User;
