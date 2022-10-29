const error = (err, req, res, _next) => {
  const status = err.status || 500;
  const message = err.message || 'Unexpected error. Try again later';

  return res.status(status).json({ message });
};

module.exports = error;