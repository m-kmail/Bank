import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Transactions from "./components/Transactions";
import Operations from "./components/Operations";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import Categories from "./components/Categories";

class App extends Component {
  constructor() {
    super();
    this.state = {
      transactions: [],
    };
  }

  async componentDidMount() {
    let transactions = await axios.get("http://localhost:3001/transactions");
    this.setState({ transactions: transactions.data });
  }

  componentDidUpdate() {
    this.componentDidMount();
  }
  createTransaction = (t) => {
    axios.post("http://localhost:3001/transaction", t);
    this.componentDidUpdate();
  };

  deleteTransaction = (vendor, category) => {
    axios.delete(
      `http://localhost:3001/transaction?vendor=${vendor}&category=${category}`
    );
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header transactions={this.state.transactions} />
          <Route
            path="/"
            exact
            render={() => (
              <Transactions
                transactions={this.state.transactions}
                deleteTransaction={this.deleteTransaction}
              />
            )}
          />
          <Route
            path="/operations"
            exact
            render={() => (
              <Operations createTransaction={this.createTransaction} />
            )}
          />

          <Route
            path="/categories"
            exact
            render={() => <Categories transactions={this.state.transactions} />}
          />
        </div>
      </Router>
    );
  }
}

export default App;
