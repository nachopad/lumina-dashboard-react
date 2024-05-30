import { Component } from "react";

import Product from "../components/Product";

class Products extends Component {
  render() {
    return (
      <div id="content-wrapper" className="d-flex flex-column">
        <Product />
      </div>
    );
  }
}

export default Products;
