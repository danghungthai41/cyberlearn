import { Tabs } from "antd";
import React, { useState } from "react";
import Test from "../../../../Test/Test";
import TabTopUsers from "./TabTopUsers/TabTopUsers";
const TopUsers = () => {
  return (
    <div className="flex flex-col space-y-2 p-4 w-full h-max">
      <div>
        <p className="text-lg font-medium">Top Users</p>
      </div>
      <TabTopUsers />
    </div>
  );
};

export default TopUsers;
