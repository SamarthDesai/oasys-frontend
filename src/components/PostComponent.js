import {
  List, Icon, Avatar, Button
} from 'antd';
import React from "react";
import LikeComponent from "../components/LikeComponent";

const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
);
export default ({post, numLikes, action}) => {
  if (!post.creator) {
    return null;
  } else {
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={[post]}
        renderItem={item => (
          <List.Item
            key={item.pid}
            actions={[<LikeComponent thing={action} text={numLikes}/>,
              <IconText type="message" text={item.numberOfComments} />]}
            extra={<img width={272} src={item.flock.photoPath}/>}
          >
            <List.Item.Meta
              // TODO: why doesn't the avatar show up? If List is horizontal instead of vertical it works :'(
              avatar={<Avatar src={item.creator.photoPath}/>}
              title={<a href={"/flock/" + item.flock.name}>{item.flock.name}</a>}
              description={item.creator.name}
            />
            {item.body}
          </List.Item>
        )}

      />

    )
  }
}