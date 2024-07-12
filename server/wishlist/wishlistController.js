const mongoose = require("mongoose");
const { WishlistModel } = require("./wishlistSchema");

const addToWishlist = async (req, res) => {
  try {
    const { itemId, userId } = req.body;
    if (!itemId || !userId) {
      return res.status(400).json({ msg: "All fields are required" });
    }
    if (
      !mongoose.Types.ObjectId.isValid(itemId) ||
      !mongoose.Types.ObjectId.isValid(userId)
    ) {
      return res.status(400).json({ msg: "Invalid Id" });
    }

    const wishlistExists = await WishlistModel.findOne({ itemId, userId });
    if (wishlistExists) {
      return res.status(400).json({ msg: "Wishlist already exists" });
    }
    const wishlist = new WishlistModel({
      itemId,
      userId,
    });
    await wishlist.save();
    return res
      .status(201)
      .json({ msg: "Wishlist added successfully", data: wishlist });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const getAllWishlistsByUserId = (req, res) => {
  try {
    const userId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ msg: "Invalid Id" });
    }

    const wishlists = WishlistModel.find({ userId });
    return res
      .status(200)
      .json({ msg: "Data obtained successfully", data: wishlists });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
module.exports = { addToWishlist, getAllWishlistsByUserId };