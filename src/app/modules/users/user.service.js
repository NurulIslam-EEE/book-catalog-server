const User = require("./user.model");

exports.addWishList = async (email, data) => {
  console.log(email, data);
  const exist = await User.findOne({ email: email });
  let result;
  if (exist) {
    result = await User.findOneAndUpdate(
      { email: email },
      { $addToSet: { wishlist: data.id } }
    );
  } else {
    result = await User.create({ name: "", email: email, wishlist: [data.id] });
  }

  return result;
};

exports.getWishLists = async (email) => {
  const exist = await User.findOne({ email: email }).populate("wishlist");

  return exist;
};
