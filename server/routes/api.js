const { json } = require("body-parser");
const express = require("express");
const Transaction = require("../models/Transaction");
const router = express.Router();

router.get("/transactions", function (req, res) {
  Transaction.find({}, function (err, alltransactions) {
    res.send(alltransactions);
  });
});

router.post("/transaction", function (req, res) {
  let transaction = req.body;
  Transaction.findOne(
    {
      vendor: transaction.vendor,
      category: transaction.category,
    },
    function (err, existedOne) {
      if (existedOne) {
        existedOne.amount += transaction.amount;
        existedOne.save();
      } else {
        let newTransaction = new Transaction({
          vendor: transaction.vendor,
          category: transaction.category,
          amount: transaction.amount,
        });
        newTransaction.save();
      }
    }
  );
  res.end();
});

router.delete("/transaction", function (req, res) {
  const vendor = req.query.vendor;
  const category = req.query.category;

  Transaction.findOneAndDelete(
    { vendor: vendor, category: category },
    function (err, t) {}
  );

  res.end();
});

module.exports = router;
