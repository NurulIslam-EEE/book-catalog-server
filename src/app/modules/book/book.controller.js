const paginationFields = require("../../../shared/pagination");
const pick = require("../../../shared/pick");
const bookSearchableFields = require("./book.consts");
const {
  createBookService,
  getBookService,
  postReviewService,
  deleteReviewService,
  getSingleService,
  updateSingleService,
  deleteBookService,
} = require("./book.service");
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
  const filters = pick(req.query, bookSearchableFields);
  const paginationOptions = pick(req.query, paginationFields);
  console.log("fffff", filters);
  try {
    const result = await getBookService(filters, paginationOptions);
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

exports.getSingle = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await getSingleService(id);
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
exports.updateSingleBook = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const result = await updateSingleService(id, data);
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

exports.deleteBook = async (req, res) => {
  const id = req.params.id;

  try {
    const result = await deleteBookService(id);
    res.status(200).json({
      status: "success",
      message: "Book deleted successfully",
    });
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).json({
      status: "fail",
      message: err.message,
    });
  }
};

exports.postReview = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    console.log("rrr", id, data);
    const result = await postReviewService(id, data);
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

exports.deleteReview = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body.email;
    console.log("rrr", id, data);
    const result = await deleteReviewService(id, data);
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
