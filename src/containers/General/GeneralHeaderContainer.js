import React, { Component } from "react";
import GeneralHeaderComponent from "../../components/GeneralHeaderComponent";

import whiteLogo from "../../images/oasys-logo-white-final-cropped-tight.png";
import blueLogo from "../../images/oasys-logo-blue-final-cropped-tight.png";

class GeneralHeaderContainer extends Component {
  constructor() {
    super();

    this.state = {
      backgroundColor: "transparent",
      logo: whiteLogo
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent);
  }

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({ backgroundColor: "white" });
      this.setState({ logo: blueLogo });
    } else {
      this.setState({ backgroundColor: "transparent" });
      this.setState({ logo: whiteLogo });
    }
  };

  render() {
    return (
      <GeneralHeaderComponent
        backgroundColor={this.state.backgroundColor}
        logo={this.state.logo}
      />
    );
  }
}

export default GeneralHeaderContainer;
