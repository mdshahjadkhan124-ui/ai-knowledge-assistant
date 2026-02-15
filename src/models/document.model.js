const mongoose = require("mongoose");

const documentSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    filePath: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["uploaded", "processing", "completed"],
      default: "uploaded",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Document", documentSchema);
