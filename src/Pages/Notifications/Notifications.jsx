import React from "react";
import img from "../../Theme";
import { Tabs, Pagination } from "antd";
import NotiLeftComponent from "./NotiLeftComponent/NotiLeftComponent";
import NotiRightComponent from "./NotiRightComponent/NotiRightComponent";
const TabPane = Tabs;
const Notifications = () => {
  return (
    <div className="flex space-x-4 w-full h-full">
      <div className="bg-theme w-1/2 rounded-xl p-4 h-screen">
        <div className="mb-3">
          <p className="text-lg font-medium">Thông báo & Lịch sử</p>
        </div>

        <div className="bg-theme p-3 rounded-xl">
          <Tabs className="">
            <TabPane
              tab={<span className="px-4 text-black">Thông báo</span>}
              key="1"
            >
              <div className="flex flex-col space-y-4 overflow-hidden justify-center items-center h-full">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <NotiLeftComponent key={index} />
                ))}
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </TabPane>
            <TabPane
              tab={<span className="px-4 text-black">Lịch Sử</span>}
              key="2"
            >
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </div>
      </div>

      <div className="bg-theme w-1/2 rounded-xl p-4 h-screen overflow-hidden">
        <div>
          <p className="text-lg font-medium mb-3">Sự kiện</p>
        </div>
        <div className="bg-theme p-3 rounded-xl w-full">
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={<span className="px-4 text-black w-full">Sắp tới hạn</span>}
              key="1"
              className="w-full"
            >
              <div className="flex flex-col flex-wrap space-y-3 overflow-hidden justify-center items-center w-full h-full">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <NotiRightComponent key={index} />
                ))}
                <Pagination defaultCurrent={1} total={50} />
              </div>
            </TabPane>
            <TabPane
              tab={<span className="px-4 text-black">Đã hoàn thành</span>}
              key="2"
            >
              Content of Tab Pane 2
            </TabPane>

            <TabPane
              tab={<span className="px-4 text-black">Hết hạn</span>}
              key="3"
            >
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
