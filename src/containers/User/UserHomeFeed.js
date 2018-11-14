import React, { Component } from "react";
import { List, Avatar, Icon } from "antd";
import PostInteraction from "../../components/PostInteraction";

const listData = [];
//const API = 'localhost/posts/search/getUserFeed';
const API = 'http://localhost:8080/flocks/1/feed/0';
//const data = {username: 'john.doe'};

for (let i = 0; i < 10; i++) {
    listData.push({
        href: "http://bschwenn.com/",
        title: "Come have dinner with President Price!",
        avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        description: "Duke Conversations",
        content: "Come talk to President Price about the future of Duke!" +
            "test branch"
    });
}

class UserHomeFeed extends Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: []
        };
        this.state.status = "start";
        console.log("wtf");
    }

    load_auth = () => {
        var self = this;
        /*fetch('http://localhost:8080/persons/b', {
            method: 'GET',
            mode: 'cors',
        }).then((response) => response.json())
        .then((resp) => {
          console.log(resp);
        });*/
        fetch('http://localhost:8080/oauth/token', {
            method: 'POST',
            body: 'username=b&password=jwtpass&grant_type=password',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "X-Requested-With": "XMLHttpRequest",
                "Authorization": "Basic " + Buffer.from('oasys:XY7kmzoNzl100').toString('base64'),
            },
            mode: 'cors'
        }).then((response) => response.json())
            .then(function(responseJson) {
                console.log(responseJson);
                self.setState(responseJson);
                self.state.status = "done";
            }).catch((error) => {
            console.error(error);
        });
    }

    /*componentDidMount() {
        fetch(API, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            mode: 'no-cors',
            body: JSON.stringify({
                'client_id': 'oasys',
                'client_secret': 'XY7kmzoNzl100@localhost:8080/oauth/token',
                'grant_type': 'password'
            })
        })
          .then(function(response) {
              return response;
          })
          .then(function(myJson) {
              console.log(JSON.stringify(myJson));
          });
    }*/

    render() {
        if (this.state.status === "start") {
            this.state.status = "loading";
            this.load_auth();
        } else if (this.state.status === "done") {
            console.log(this.state.access_token);
        }
        return (
            <List
                itemLayout="vertical"
                size="large"
                pagination={{
                    onChange: page => {
                        console.log(page);
                    },
                    pageSize: 3
                }}
                dataSource={listData}
                renderItem={item => (
                    <List.Item
                        key={item.title}
                        actions={[
                            <PostInteraction
                                type="pushpin-o"
                                text="35"
                                theme="outlined"
                                twoToneColor=""
                            />,
                            <PostInteraction
                                type="team-o"
                                text="70"
                                theme="outlined"
                                twoToneColor=""
                            />,
                            <PostInteraction
                                type="message"
                                text="2"
                                theme="outlined"
                                twoToneColor=""
                            />
                        ]}
                        extra={
                            <img
                                width={272}
                                alt="logo"
                                src="https://today.duke.edu/sites/default/files/styles/story_hero/public/pricemain.jpg?itok=2Inor3zE"
                            />
                        }
                    >
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </List.Item>
                )}
            />
        );
    }
}

export default UserHomeFeed;