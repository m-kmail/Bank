import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/Operations.css";

class Operations extends Component {
  constructor() {
    super();
    this.state = { inputvendor: "", inputcategory: "", inputamount: "" };
  }

  changed = (e) => {
    let whatToChange = e.target.className;
    this.setState({ [whatToChange]: e.target.value });
  };

  isEmpty = (x) => {
    return x == "";
  };

  createTransaction = (event) => {
    const vendor = this.state.inputvendor;
    const category = this.state.inputcategory;
    let amount = this.state.inputamount;
    if (this.isEmpty(vendor) || this.isEmpty(category) || this.isEmpty(amount))
      alert("Please Fill Each Of The Fields ");
    else {
      let className = event.currentTarget.className;
      amount *= className == "withdraw" ? -1 : 1;
      const newTransaction = {
        vendor: vendor,
        category: category,
        amount: amount,
      };

      this.props.createTransaction(newTransaction);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="inputs">
          <div className="all">
            <input
              type="text"
              placeholder="Vendor"
              className="inputvendor"
              value={this.state.vendor}
              onChange={this.changed}
              required
            />
            <label class="label">Vendor</label>
          </div>
          <div className="all">
            <input
              type="text"
              placeholder="Category"
              className="inputcategory"
              value={this.state.category}
              onChange={this.changed}
              required
            />
            <label class="label">Category</label>
          </div>
          <div className="all">
            <input
              type="number"
              placeholder="Amount"
              className="inputamount"
              value={this.state.amount}
              onChange={this.changed}
              required
            />
            <label class="label">amount</label>
          </div>
        </div>
        <Link to="/">
          <button className="deposit" onClick={this.createTransaction}>
            Deposit
          </button>
          <button className="withdraw" onClick={this.createTransaction}>
            Withdraw
          </button>
        </Link>
      </div>
    );
  }
}

export default Operations;
