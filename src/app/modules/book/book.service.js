const Book = require("./book.model");

exports.createBookService = async (data) => {
  const result = await Book.create(data);
  // console.log("result", data, result);
  return result;
};

exports.getBookService = async (data) => {
  const result = await Book.find({});
  // console.log("result", data, result);
  return result;
};
