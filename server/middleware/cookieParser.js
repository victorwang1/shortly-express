const parseCookies = (req, res, next) => {
  var cookies = req.headers.cookie;
  if (cookies) {
    req.cookies = cookies.split('; ')
                         .reduce((cookies, string) => {
                           var key = string.split('=')[0];
                           var value = string.split('=')[1];
                           cookies[key] = value;
                           return cookies;
                         }, {});
    next();
  } else {
    next();
  }
};

module.exports = parseCookies;

// Check if the cookie EXISTS
  // Go to the database to get userId
    // Use userId to get all list items associated with user
