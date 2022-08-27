const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  vendor: String,
  category: String,
  amount: Number,
});
const Transaction = mongoose.model("Transaction", transactionSchema);
module.exports = Transaction;
