const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  snippets: [{}],
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
