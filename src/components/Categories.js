import React, { Component } from "react";
import "../styles/Categories.css";

class Categories extends Component {
  render() {
    let categories = {};
    this.props.transactions.map((t) => {
      categories[t.category] = (categories[t.category] || 0) + t.amount;
    });
    return (
      <div>
        <h1>All Categories</h1>
        <div className="theader">
          <h1 className="headcateg">Cattegorie</h1>
          <h1 className="headtotal">Total</h1>
        </div>
        {Object.keys(categories).map((k) => {
          return (
            <div className="singlecategory">
              <h1 className="categ">{k}</h1>
              <h1
                className="total"
                style={{
                  color: categories[k] > 0 ? "green" : "red",
                }}
              >
                {categories[k]}$
              </h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Categories;
