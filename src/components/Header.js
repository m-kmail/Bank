import React, { Component } from "react";
import "../styles/Header.css";
class Header extends Component {
  gitbalance = () => {
    let balance = 0;
    this.props.transactions.map((t) => {
      balance += t.amount;
    });
    return (
      <h1
        style={{ color: balance >= 500 ? "green" : "red" }}
        className="allbalance"
      >
        {balance}$
      </h1>
    );
  };
  render() {
    return (
      <div className="header">
        <div className="personal">
          <img src={require("../person.jpg")} className="photo" />
          <h1 className="name">Kmail</h1>
        </div>
        <div className="balance">
          {this.gitbalance()}
          <p className="txt">Your balance</p>
        </div>
      </div>
    );
  }
}

export default Header;
