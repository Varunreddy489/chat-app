import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    /*  every user including the authenticated user you can sendchats to youe self if you include this...

    const allUsers = await User.find();
    */

    // every user excluding the authenticated user you cannot sendchats to youe self if you include this..
    const fileredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

    res.status(200).json(fileredUsers);

  } catch (error) {
    console.error("error in getUsersForSidebar :", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
