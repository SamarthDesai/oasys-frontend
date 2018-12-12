import {
  List, Icon, Avatar
} from 'antd';
import React from "react";

const IconText = ({type, text}) => (
  <span>
    <Icon type={type} style={{marginRight: 8}}/>
    {text}
  </span>
);
export default ({post}) => {
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
            actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />,
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