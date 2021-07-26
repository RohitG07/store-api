function notFound(req, res) {
  return res.status(404).send("Unknown.");
}

module.exports = notFound;
