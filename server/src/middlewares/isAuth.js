module.exports.isAuth = (req, res, next) => {
  const user = req.session?.user;
  if (user) {
    next();
    return;
  }
  res.status(403);
};
