import { Component } from "react";

import User from "../components/Users";

class Users extends Component {
  render() {
    return (
      <div id="content-wrapper" className="d-flex flex-column">
        <User />
      </div>
    );
  }
}

export default Users;
