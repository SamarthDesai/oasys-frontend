import React from "react";
import { Checkbox } from "antd";

const { Group } = Checkbox;

export default ({
  checkedList,
  indeterminate,
  checkAll,
  plainOptions,
  onCheckAllChange,
  onChange
}) => (
  <div
    style={{
      borderBottom: "1px solid #E9E9E9",
      marginTop: 16,
      paddingBottom: 8
    }}
  >
    <Checkbox
      indeterminate={indeterminate}
      onChange={onCheckAllChange}
      checked={checkAll}
      style={{ marginRight: 8 }}
    >
      All
    </Checkbox>
    <Group options={plainOptions} value={checkedList} onChange={onChange} />
  </div>
);
