import React, { Component } from "react";
import "../styles/Transaction.css";
class Transaction extends Component {
  deleteTransaction = () => {
    let vendor = this.props.transaction.vendor;
    let category = this.props.transaction.category;
    this.props.deleteTransaction(vendor, category);
  };

  render() {
    return (
      <div className="transaction">
        <div className="vendor">
          <h2>{this.props.transaction.vendor}</h2>
        </div>
        <div className="category">
          <h2>{this.props.transaction.category}</h2>
        </div>
        <div className="amount">
          <h2
            style={{
              color: this.props.transaction.amount > 0 ? "green" : "red",
            }}
          >
            {this.props.transaction.amount}$
          </h2>
        </div>
        <button className="del">
          <i
            class="fa fa-trash"
            aria-hidden="true"
            onClick={this.deleteTransaction}
          ></i>
        </button>
      </div>
    );
  }
}

export default Transaction;
