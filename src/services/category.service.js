const { Category } = require('../models');

const getCategories = async () => Category.findAll();

module.exports = {
  getCategories,
};