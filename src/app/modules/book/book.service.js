const bookSearchableFields = require("./book.consts");
const Book = require("./book.model");

exports.createBookService = async (data) => {
  const result = await Book.create(data);
  // console.log("result", data, result);
  return result;
};

exports.getBookService = async (filters) => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: bookSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  console.log("andddd", andConditions);
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const result = await Book.find(whereConditions);
  // console.log("result", data, result);
  return result;
};
