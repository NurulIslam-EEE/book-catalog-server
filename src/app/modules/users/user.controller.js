const { addWishList, getWishLists } = require("./user.service");

exports.addWishlistController = async (req, res) => {
  const email = req.params.email;
  const data = req.body;
  try {
    const result = await addWishList(email, data);
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

exports.getWishlist = async (req, res) => {
  const email = req.params.email;
  try {
    const result = await getWishLists(email);
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
