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

    imageUrls: [
      {
        type: String,
        required: true,
        validate: {
          validator: (value) => {
            if (Array.isArray(value)) {
              return false;
            }
            let isValid = true;
            value.forEach((url) => {
              if (!validator.isURL(url)) {
                isValid = false;
              }
            });
            return isValid;
          },
          message: "please provide a valid image",
        },
      },
    ],
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
