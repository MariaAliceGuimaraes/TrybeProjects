const createBlogPosts = (sequelize, DataTypes) => {
  const blogposts = sequelize.define('BlogPosts', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  },
  {
    timestamps: false,
  });

  blogposts.associate = (model) => {
    blogposts.belongsTo(model.User, { foreignKey: 'userId', as: 'user' });
  };

  return blogposts;
};

module.exports = createBlogPosts;
