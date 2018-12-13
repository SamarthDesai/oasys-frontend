import React, { Component } from "react";
import EventInteractionComponent from "../../components/EventInteractionComponent";
import {getAuthHeaderValue} from "../../utils/AuthUtils";
import {postJson} from "../../utils/RestUtils";

class FollowGroupInteractionContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    followGroup = async () => {
        console.log("follow");
        await postJson("/current_user/follows/" + this.props.gid, {});
    };

    render() {
        return (
            <EventInteractionComponent
                icon="team-o"
                type="primary"
                onClick={this.followGroup}
                text={"Follow group"} // can change to number of people in group
            />
        )
    }
}

export default FollowGroupInteractionContainer;
