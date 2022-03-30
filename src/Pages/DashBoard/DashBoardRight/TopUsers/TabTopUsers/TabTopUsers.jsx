import React from "react";
import { Tabs } from "antd";
import PositiveUsers from "../PositiveUsers/PositiveUsers";
import IntelUsers from "../IntelUsers/IntelUsers";
import UsersLevel from "../UsersLevel/UsersLevel";

const { TabPane } = Tabs;
const TabTopUsers = () => {
  function callback(key) {
    console.log(key);
  }
  return (
    <Tabs
      className=""
      defaultActiveKey="1"
      onChange={callback}
      tabBarGutter={20}
    >
      <TabPane
        tab={
          <span className="px-4 py-2 h-full text-[#222260] active:border-b-[text-[#222260]]">
            Tích cực
          </span>
        }
        tabBarStyle={{
          color: "#000",
          backgroundColor: "#000",
        }}
        key="1"
      >
        
        <PositiveUsers />
      </TabPane>
      <TabPane tab={<span className="px-4 py-2">Học giỏi</span>} key="2">
        <IntelUsers />
      </TabPane>
      <TabPane tab={<span className="px-4 py-2">Cấp độ</span>} key="3">
        <UsersLevel />
      </TabPane>
    </Tabs>
  );
};

export default TabTopUsers;
