import React, { Component } from "react";
import EventInteractionComponent from "../../components/EventInteractionComponent";
import {getAuthHeaderValue} from "../../utils/AuthUtils";
import {postJson} from "../../utils/RestUtils";

class JoinGroupInteractionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    joinGroup = async () => {
        console.log("join group");
        await postJson("/flocks/" + this.props.gid + "/requests/0", {});
    };

    render() {
        return (
            <EventInteractionComponent
                icon="team-o"
                type="primary"
                onClick={this.joinGroup}
                text={"Join group"} // can change to number of people in group
            />
        )
    }
}

export default JoinGroupInteractionContainer;
