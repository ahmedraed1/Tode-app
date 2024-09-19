const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  isPinned: {
    type: Boolean,
    default: false,
  },
  createdOn: {
    type: Date,
    default: new Date().getTime(),
  },
  userId: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("notes", noteSchema);
