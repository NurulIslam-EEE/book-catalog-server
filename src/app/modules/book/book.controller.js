const { createBookService } = require("./book.service");

exports.postBook = async (req, res) => {
  try {
    const categories = await createBookService();
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(200).json({
      status: "fail",
      message: "",
    });
  }
};
