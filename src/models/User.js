module.exports = (sequelize, DataTypes) =>{
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTERGER, primaryKey: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  User.associate = (models) => {
    User.hasMany(models.BlogPost, {
      as: 'blog_posts',
      foreignKey: 'userId',
    });
  };

  return User;
};