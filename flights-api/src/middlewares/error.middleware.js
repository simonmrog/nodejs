const errorHandler = (err, req, res, next) => {
  console.error("[ERROR MIDDLEWARE]", err);

  let statusCode = 500;
  if (err.message.includes()) {
    statusCode = 400;
    err.message = "Invalid JSON Body";
  }
  if (err.message.includes("Not Found")) statusCode = 404;
  if (err.message.includes("Cast to ObjectId failed for value")) {
    statusCode = 400;
    err.message = "Invalid ObjectId";
  }
  res.status(statusCode).json({ status: "error", message: err.message });
};

module.exports = { errorHandler };
