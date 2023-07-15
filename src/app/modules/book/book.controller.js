const { createBookService, getBookService } = require("./book.service");
const { StatusCodes } = require("http-status-codes");

exports.postBook = async (req, res) => {
  try {
    const result = await createBookService(req.body);
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.getBooks = async (req, res) => {
  try {
    const result = await getBookService();
    res.status(200).json({
      status: "success",
      data: result,
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      status: "fail",
      message: err.message,
    });
  }
};
