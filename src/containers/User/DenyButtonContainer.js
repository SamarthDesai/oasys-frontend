import Button from "antd/lib/button/button";
import React, {Component} from "react";


class DenyButtonContainer extends Component {
  handleClick = () => {
    this.props.deny(this.props.uid);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        Deny
      </Button>
    );
  }
}

export default DenyButtonContainer;