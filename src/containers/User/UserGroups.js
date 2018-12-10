import React, { Component } from "react";
import {Link} from "react-router-dom";
import {Button, Col, List, Row, Select} from "antd";
import {getAuthHeaderValue} from "../../utils/AuthUtils";
import GroupListingComponent from "../../components/GroupListingComponent";
import update from 'react-addons-update'; // ES6

const Option = Select.Option;

class UserGroups extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'groups': []
        };
    }

    componentDidMount() {
        let authHeader = getAuthHeaderValue();
        fetch("http://localhost:8080/current_user/flocks", {
            method: 'GET',
            headers: {
                Authorization: authHeader
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson);
                this.setState({'groups': responseJson});
                for (var i = 0; i < this.state.groups.length; i++) {
                    if (this.state.groups[i].photoPath === "NULL") {
                        this.state.groups[i].photoPath="https://today.duke.edu/sites/default/files/styles/story_hero/public/pricemain.jpg?itok=2Inor3zE";
                        console.log(this.state.groups[i].photoPath);

                        this.setState({
                            'group': update(this.state.groups, {i: {photoPath: {$set: 'https://today.duke.edu/sites/default/files/styles/story_hero/public/pricemain.jpg?itok=2Inor3zE'}}})
                        });
                    }
                }
            });
    }

    render() {
        const groups = this.state.groups;
        return (
            <ul>
                {this.state.groups.map(function(group, index) {
                    return (
                        <div key={index}>
                            <h1>{group.name}</h1>
                        </div>
                    )
                })}
            </ul>,
            <List
                itemLayout="vertical"
                size="large"
                dataSource={this.state.groups}
                renderItem={item => <GroupListingComponent item={item} />}
            />
        );
    }
}

export default UserGroups;