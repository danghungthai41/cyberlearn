import React, { useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { Button, Layout, Menu } from "antd";
import Sider from "antd/lib/layout/Sider";
import img from "../../Theme";
import { Content } from "antd/lib/layout/layout";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { split } from "lodash";
const LayoutAdmin = ({ children }) => {
  const { pathname } = useLocation();
  const [collapse, setCollapse] = useState(false);
  const [active, setActive] = useState(pathname);
  const { Sider, Content } = Layout;
  return (
    <Layout
      className="bg-transparent"
      style={{
        backgroundImage: `url(${img.bgTheme})`,
        minHeight: "100vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Sider
        className="fixed h-full bg-transparent"
        trigger={null}
        collapsible
        collapsed={collapse}
      >
        <div className="h-20" />
        <Menu
          className="h-full border-white border-[1px] bg-theme min-w-[80px] max-w-[150px] px-2 "
          mode="inline"
          defaultSelectedKeys={["1"]}
        >
          <Menu.Item
            className={`after:border-none p-3 ${
              active === "/dashboard" ? "shadow-lg" : ""
            }  text-black h-auto bg-inherit  rounded-xl hover:color-[#000] hover:bg-transparent `}
            key="1"
            onClick={() => setActive("/dashboard")}
          >
            <div className="flex flex-col text-center items-center justify-center">
              <img className="w-6 mb-2" src={img.homeIcon} alt="" />
              <NavLink to="/dashboard">
                {!collapse && (
                  <span className="text-sm whitespace-pre-wrap tracking-tighter text-black">
                    DashBoard
                  </span>
                )}
              </NavLink>
            </div>
          </Menu.Item>

          <Menu.Item
            className={`after:border-none p-3 ${
              active === "/lo-trinh" ? "shadow-lg" : ""
            }  text-black h-auto bg-inherit  rounded-xl hover:color-[#000] hover:bg-transparent `}
            key="3"
            onClick={() => setActive("/lo-trinh")}
          >
            <div className="flex flex-col text-center items-center justify-center">
              <img
                className="w-6 rotate-180 mb-2"
                src={img.broadcastIcon}
                alt=""
              />
              <NavLink to="/lo-trinh">
                <span className="text-sm m-0 whitespace-pre-wrap tracking-tighter text-black">
                  {!collapse && "Lộ trình"}
                </span>
              </NavLink>
            </div>
          </Menu.Item>

          <Menu.Item
            className={`after:border-none p-3 ${
              active === "/chung-nhan" ? "shadow-lg" : ""
            }  text-black h-auto bg-inherit  rounded-xl hover:color-[#000] hover:bg-transparent `}
            key="3"
            onClick={() => setActive("/chung-nhan")}
          >
            <div className="flex flex-col text-center items-center justify-center">
              <img className="w-6 mb-2" src={img.graduationCapIcon} alt="" />

              <NavLink to="/chung-nhan">
                <span className="text-sm m-0 break-spaces tracking-tighter text-black">
                  {!collapse && "Điểm & Chứng nhận"}
                </span>
              </NavLink>
            </div>
          </Menu.Item>

          <Menu.Item
            className={`after:border-none p-3 ${
              active === "/thongbao-task" ? "shadow-lg" : ""
            }  text-black h-auto bg-inherit  rounded-xl hover:color-[#000] hover:bg-transparent `}
            key="4"
            onClick={() => setActive("/thongbao-task")}
          >
            <div className="flex flex-col text-center items-center justify-center">
              <img className="w-6 mb-2" src={img.eventIcon} alt="" />
              <NavLink to="/thongbao-task">
                <span className="text-sm m-0 h-10 break-spaces tracking-tighter text-black">
                  {!collapse && "Thông báo & Sự kiện"}
                </span>
              </NavLink>
            </div>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout bg-transparent  h-full ">
        <Header collapse={collapse} setCollapse={setCollapse} />
        <div className="h-20"></div>
        <Content className={`${collapse ? "ml-[81px]" : "ml-[151px] "} h-full`}>
          <div className="p-4 rounded-xl ">{children}</div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
// <section className="h-screen">
//   <Sider
//     className="w-[150px] m-w-[150px] m-w-[150px] fixed top-20"
//     trigger={null}
//     collapsible
//     collapsed={collapse}
//   >
//     <div className="logo" />
//     {collapse ? (
//       <Menu
//         className="bg-transparent h-screen border-white px-2  sider-theme"
//         mode="inline"
//         defaultSelectedKeys={["1"]}
//       >
//         <Menu.Item
//           className="after:border-none text-black h-24 bg-inherit shadow-lg  hover:color-[#000] hover:bg-transparent active:bg-transparent active:text-black"
//           key="1"
//         >
//           <div className="flex flex-col text-center items-center justify-center">
//             <img className="w-7 mb-2" src={img.homeIcon} alt="" />
//             <span className="text-sm whitespace-pre-wrap tracking-tighter">
//               DashBoard
//             </span>
//           </div>
//         </Menu.Item>

//         <Menu.Item className="after:border-none h-24 " key="2">
//           <div className="flex flex-col text-center items-center justify-center">
//             <img
//               className="w-7 rotate-180 mb-2"
//               src={img.broadcastIcon}
//               alt=""
//             />
//             <span className="text-sm m-0 whitespace-pre-wrap tracking-tighter">
//               Lộ trình
//             </span>
//           </div>
//         </Menu.Item>

//         <Menu.Item className="after:border-none h-24 " key="3">
//           <div className="flex flex-col text-center items-center justify-center">
//             <img className="w-7 mb-2" src={img.graduationCapIcon} alt="" />
//             <span className="text-sm m-0 whitespace-pre-wrap tracking-tighter">
//               {" "}
//               Điểm & Chứng nhận
//             </span>
//           </div>
//         </Menu.Item>

//         <Menu.Item className="after:border-none h-24 " key="4">
//           <div className="flex flex-col text-center items-center justify-center">
//             <img className="w-7 mb-2" src={img.eventIcon} alt="" />
//             <span className="text-base m-0 whitespace-pre-wrap tracking-tighter">
//               {" "}
//               Thông báo & Sự kiện
//             </span>
//           </div>
//         </Menu.Item>
//       </Menu>
//     ) : (
//       <Menu
//         className="bg-transparent h-screen border-white p-3 sider-theme-mobile"
//         mode="inline"
//         defaultSelectedKeys={["1"]}
//       >
//         <Menu.Item
//           className="after:border-none bg-inherit h-20 shadow-lg rounded-3xl hover:color-black hover:bg-transparent active:bg-transparent"
//           key="1"
//         >
//           <div className="flex flex-col text-center">
//             <img className="w-7" src={img.homeIcon} alt="" />
//           </div>
//         </Menu.Item>

//         <Menu.Item className="after:border-none h-20 " key="2">
//           <div className="flex flex-col text-center">
//             <img
//               className="w-7 rotate-180"
//               src={img.broadcastIcon}
//               alt=""
//             />
//           </div>
//         </Menu.Item>

//         <Menu.Item className="after:border-none h-20 " key="3">
//           <div className="flex flex-col text-center">
//             <img className="w-7" src={img.graduationCapIcon} alt="" />
//           </div>
//         </Menu.Item>

//         <Menu.Item className="after:border-none h-20 " key="4">
//           <div className="flex flex-col text-center">
//             <img className="w-7" src={img.eventIcon} alt="" />
//           </div>
//         </Menu.Item>
//       </Menu>
//     )}
//   </Sider>
//   <section className="ml-[150px] w-full h-full">
//     <Header collapse={collapse} setCollapse={setCollapse} />
//     <div className="w-full h-20"></div>

//     {collapse ? (
//       <section className="ml-[150px] h-full w-full overflow-hidden">
//         <main className="w-full h-full p-6">{children}</main>
//       </section>
//     ) : (
//       <section className="ml-[100px] w-full h-full">
//         <main className="w-full h-full p-6">{children}</main>
//       </section>
//     )}
//   </section>
// </section>
