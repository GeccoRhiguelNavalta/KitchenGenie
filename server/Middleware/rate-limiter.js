//get express rate limit for limiting client requests to API DB
const rateLimit = require("express-rate-limit");

const requestRateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 min in milliseconds
  max: 9, // Limit each IP to 9 requests per `window` (here, per 1 minute)
  message: "client request limit reached",
  statusCode: 429,
  headers: true, //Return rate limit info in the `RateLimit-*` headers
});

module.exports = { requestRateLimiter };
