const Book = require("./book.model");

exports.createBookService = async (data) => {
  console.log("data", data);
  const result = await Book.create(data);
  console.log("result", data, result);
  return result;
};
