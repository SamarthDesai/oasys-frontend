import React, { Component } from "react";
import {getAuthHeaderValue} from "../../utils/AuthUtils";
import {List, Card} from "antd";
import EventListingComponent from "../../components/EventListingComponent";
import FeedPostComponent from "../../components/FeedPostComponent";

class EventListingContainer extends Component {
  constructor() {
    super();

    this.state = {
      pinned: "false",
      totalPinned: 0,
        events: []
    };
    this.load_events(0);
  }

    async load_events(page_number) {
        let authHeader = getAuthHeaderValue();
        var self = this;
        await fetch("http://localhost:8080/current_user/events/" + page_number, {
            method: "GET",
            headers: {
                Authorization: authHeader
            }
        })
            .then(response => response.json())
            .then(function(responseJson) {
                console.log(responseJson);
                self.setState({ 'events': responseJson });
            });
    }

    render() {
        return (
            <List
                itemLayout="horizontal"
                size="large"
                pagination={{
                    onChange: page => {
                        this.load_events(page);
                        console.log(page);
                        },
                    pageSize: 100
                }}
                style={{ marginTop:64}}
                dataSource={this.state.events}
                renderItem={item => <EventListingComponent item={item} />}
            />
        );
    }
}

export default EventListingContainer;
