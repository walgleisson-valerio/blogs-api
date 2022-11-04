const { blogPostService } = require('../services');

const getBlogPosts = async (req, res) => {
  const posts = await blogPostService.getBlogPosts();

  res.status(200).json(posts);
};

const getBlogPostById = async (req, res) => {
  const { id } = req.params;
  const post = await blogPostService.getBlogPostById(id);

  if (!post) {
    const err = new Error('Post does not exist');
    err.status = 404;
    throw err;
  }

  res.status(200).json(post);
};

module.exports = {
  getBlogPosts,
  getBlogPostById,
};