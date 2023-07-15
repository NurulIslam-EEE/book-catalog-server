const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const bookSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title"],
    },
    author: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
    publicationDate: {
      type: String,
      required: [true, "Please provide publication date"],
    },
    image: {
      type: String,
    },
    reviews: [],
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;

// name: {
//   type: String,
//   required: [true, "Please provide a name for this product"],
//   trim: true,
//   unique: [true, "Name musst be unique"],
//   lowercase: true,
//   minLength: [3, "Name must be at least 3 characters"],
//   maxLength: [100, "Name too large"],
// },
