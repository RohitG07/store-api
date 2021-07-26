function errorHandler(err, req, res, next) {
  return res
    .status(500)
    .json({ msg: "Something went wrong! Try Again later." });
}

module.exports = errorHandler;
