import React from "react";
import Filter from "./components/Filter";
import Products from "./components/Products";
import data from "./data.json";
import "./index.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }

  render() {
    return (
      <div className="grid-container">
        <header className="App-header">
          <a href="/">Made in Rwanda Online shopping Store</a>
        </header>

        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length} size={this.state.size}></Filter>
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">
              <h2>
                <center>Cart items</center>
              </h2>
            </div>
          </div>
        </main>

        <footer>All right reserved 2021 - ICT final project</footer>
      </div>
    );
  }
}

export default App;
