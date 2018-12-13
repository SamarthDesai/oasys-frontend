import React, { Component } from "react";
import EventInteractionComponent from "../../components/EventInteractionComponent";
import {getAuthHeaderValue} from "../../utils/AuthUtils";
import {postJson} from "../../utils/RestUtils";

class GoingInteractionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      going: "false",
        allPeople: [],
      totalGoing: 0
    };
    this.loadGoing();
    //this.going();
  }

    async loadGoing() {
        let authHeader = getAuthHeaderValue();

        await fetch("http://localhost:8080/current_user/goingBool/" + this.props.event_id, {
          method: "GET",
            headers: {
                Authorization: authHeader
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({going: true});
            })
            .catch(error => {
                this.setState({going: false});
            });

        await fetch("http://localhost:8080/events/going_list/" + this.props.event_id, {
            method: "GET",
            headers: {
                Authorization: authHeader
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                console.log(responseJson);
                this.setState({
                    allPeople: responseJson
                });
                this.setState({totalGoing: this.state.allPeople.length});
            });
    }

  modifyRSVP = async() => {
      let authHeader = getAuthHeaderValue();
      if (this.state.going === false) {
        console.log("IM GOING NOW");
          await postJson("/current_user/going/" + this.props.event_id, {});
          this.setState({going: true});
          this.loadGoing();
          return;
      }
      else {
          await fetch("http://localhost:8080/current_user/going/" + this.props.event_id, {
              method: "DELETE",
              headers: {
                  Authorization: authHeader
              }
          });
          console.log("IM NOT GOING ANYMORE");
          this.setState({going: false});
      }
      this.loadGoing();
  };

  render() {
    if (this.state.going === true) {
        return (
            <EventInteractionComponent
                icon="team-o"
                type="primary"
                onClick={this.modifyRSVP}
                text={this.state.totalGoing}
            />
        );
    }
    else {
        return (
            <EventInteractionComponent
                icon="team-o"
                type=""
                onClick={this.modifyRSVP}
                text={this.state.totalGoing}
            />
        );
    }
  }
}

export default GoingInteractionContainer;
