// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function (req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.url === "/user/login" || req.url === "/user/register") {
    console.log(req.url);
    console.log(`login route middleware`);
    return next();
  }

  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page

  console.log(`user not authenticated`);
  res.status(401).send({ error: "user not authenticated" });
};
