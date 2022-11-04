const { blogPostService } = require('../services');

const getBlogPosts = async (req, res) => {
  const posts = await blogPostService.getBlogPosts();

  res.status(200).json(posts);
};

module.exports = {
  getBlogPosts,
};