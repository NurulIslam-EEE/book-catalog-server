const Book = require("./book.model");

exports.createBookService = async (data) => {
  const result = await Book.create(data);
  console.log("result", data, result);
  return result;
};
