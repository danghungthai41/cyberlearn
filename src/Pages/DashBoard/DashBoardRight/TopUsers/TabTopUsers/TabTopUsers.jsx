import React from "react";
import { Tabs } from "antd";
import PositiveUsers from "../PositiveUsers/PositiveUsers";
import IntelUsers from "../IntelUsers/IntelUsers";
import UsersLevel from "../UsersLevel/UsersLevel";
import style from "./style.module.css";
import dataPositiveUsers from "../../Data/dataPositiveUsers.json";
import dataIntelUsers from "../../Data/dataIntelUsers.json";
import usersLevel from "../../Data/usersLevel.json";
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
        {dataPositiveUsers.map((item, index) => (
          <PositiveUsers key={index} item={item} index={index} />
        ))}
      </TabPane>
      <TabPane
        tab={<span className="px-4 py-2 text-[#222260]">Học giỏi</span>}
        key="2"
      >
        {dataIntelUsers.map((item, index) => (
          <PositiveUsers key={index} item={item} index={index} />
        ))}
      </TabPane>
      <TabPane
        tab={<span className="px-4 py-2 text-[#222260]">Cấp độ</span>}
        key="3"
      >
        {usersLevel.map((item, index) => (
          <PositiveUsers key={index} item={item} index={index} />
        ))}
      </TabPane>
    </Tabs>
  );
};

export default TabTopUsers;
