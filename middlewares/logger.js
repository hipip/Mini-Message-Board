const logger = (req, res, next) => {
  console.log(`request received: path=${req.path} method=${req.method}`);
  next();
};

module.exports = logger;
