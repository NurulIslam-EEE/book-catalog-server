const { addWishList } = require("./user.service");

exports.updateSingleBook = async (req, res) => {
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
