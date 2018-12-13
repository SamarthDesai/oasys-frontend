import Button from "antd/lib/button/button";
import React, {Component} from "react";


class ApproveButtonContainer extends Component {
  handleClick = () => {
    this.props.approve(this.props.uid);
  }

  render() {
    return (
      <Button onClick={this.handleClick}>
        Approve
      </Button>
    );
  }
}

export default ApproveButtonContainer;