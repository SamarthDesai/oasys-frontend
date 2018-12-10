import {List} from "antd";
import {Avatar} from "antd";
import React from "react";

export default ({comments}) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={comments}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={item.creator.photoPath}/>}
            title={item.creator.name}
            description={item.body}
          />
        </List.Item>
      )
      }
    />
  )
}
