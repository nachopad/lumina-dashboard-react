import { Component } from "react";

import Sale from "../components/Sale";

class Sales extends Component {
  render() {
    return (
      <div id="content-wrapper" className="d-flex flex-column">
        <Sale />
      </div>
    );
  }
}

export default Sales;
