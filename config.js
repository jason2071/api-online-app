module.exports = {
  ENV: process.env.NODE_ENV || "development",
  PORT: process.env.PORT || 3000,
  URL: process.env.BASE_URL || "http://localhost:3000",
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://room1001:read@1234@customer-m4foc.mongodb.net/test?retryWrites=true&w=majority",
  JWT_SECRET: process.env.NODE_ENV || "1q2w3e4r",
};
