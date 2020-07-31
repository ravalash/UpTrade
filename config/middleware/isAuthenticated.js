// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if(req.url==="/user/login" || "/user/register" ){
    console.log(`login route middleware`);
    return next();
  }
  
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page

  console.log(`user not authenticated`)
  return res.redirect("/");
};
