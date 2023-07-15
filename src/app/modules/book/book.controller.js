const { createBookService } = require("./book.service");
import { StatusCodes } from "http-status-codes";

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
