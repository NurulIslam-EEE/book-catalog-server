const calculatePagination = require("../../../shared/paginationsHelpers");
const bookSearchableFields = require("./book.consts");
const Book = require("./book.model");

exports.createBookService = async (data) => {
  const result = await Book.create(data);
  // console.log("result", data, result);
  return result;
};

exports.getBookService = async (filters, paginationOptions) => {
  const { searchTerm, ...filtersData } = filters;
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(paginationOptions);
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
  const sortConditions = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  console.log("andddd", andConditions);
  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const result = await Book.find(whereConditions).sort(sortConditions);
  // console.log("result", data, result);
  return result;
};
exports.getSingleService = async (id) => {
  const result = await Book.findOne({ _id: id });
  return result;
};

exports.postReviewService = async (id, data) => {
  const result = await Book.findOneAndUpdate(
    { _id: id },
    { $push: { reviews: data } }
  );
  return result;
};

exports.deleteReviewService = async (id, data) => {
  const result = await Book.findOneAndUpdate(
    { _id: id },
    { $pull: { reviews: { email: data } } }
  );
  return result;
};
