import React, { Component } from "react";
import {getAuthHeaderValue} from "../../utils/AuthUtils";
import {List} from "antd";
import EventListingComponent from "../../components/EventListingComponent";
import FeedPostComponent from "../../components/FeedPostComponent";

class EventListingContainer extends Component {
  constructor() {
    super();

    this.state = {
      pinned: "false",
      totalPinned: 0,
        events: [
            {
                name: "Duke Conversations Dinner",
                time: new Date(),
                location: "A nice house",
                body: "Dinner w a prof! it will be so fun and awesome. wow",
                group: "Duke Conversations"
            },
            {
                name: "Second Duke Conversations Dinner",
                time: new Date(),
                location: "Another nice house",
                body: "Dinner w a prof! it will be so fun and awesome. wow pt 2",
                group: "Duke Conversations"
            },
            {
                name: "Third Duke Conversations Dinner",
                time: new Date(),
                location: "Another nice house",
                body: "Dinner w a prof! it will be so fun and awesome. wow pt 3",
                group: "Duke Conversations"
            }
        ]
    };
    //this.load_events(0);
  }

/*    async load_events(page_number) {
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
                self.setState({ 'events': responseJson });
            });
    }*/

    render() {
        return (
            <List
                itemLayout="horizontal"
                size="large"
/*                pagination={{
                    onChange: page => {
                        this.load_events(page);
                        console.log(page);
                        },
                    pageSize: 100
                }}*/
                dataSource={this.state.events}
                renderItem={item => <EventListingComponent item={item} />}
            />
        );
    }
}

export default EventListingContainer;
