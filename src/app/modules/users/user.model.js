const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

// schema design
const wishlistSchema = mongoose.Schema(
  {
    name: {
      type: String,
      default: "",
    },
    email: {
      type: String,
      required: [true, "Please provide  email"],
    },
    wishlist: [{ type: ObjectId, ref: "Book" }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", wishlistSchema);
module.exports = User;

// name: {
//   type: String,
//   required: [true, "Please provide a name for this product"],
//   trim: true,
//   unique: [true, "Name musst be unique"],
//   lowercase: true,
//   minLength: [3, "Name must be at least 3 characters"],
//   maxLength: [100, "Name too large"],
// },
