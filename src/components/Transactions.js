import React, { Component } from "react";
import Transaction from "./Transaction";
import "../styles/Transactions.css";
import { Link } from "react-router-dom";

class Transactions extends Component {
  render() {
    return (
      <div className="transactions">
        <h1 className="tran">Transactions</h1>
        {this.props.transactions.map((t) => {
          return (
            <Transaction
              transaction={t}
              deleteTransaction={this.props.deleteTransaction}
            />
          );
        })}
        <hr></hr>
        <div className="links">
          <Link to="/operations">
            <button className="options">Operations</button>
          </Link>
          <Link to="/categories">
            <button className="options">Categories</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Transactions;
