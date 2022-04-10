import { Table, Tag } from "antd";
import React from "react";
import { FaCommentDots } from "react-icons/fa";
import UseLottie from "../../../../HOC/Lottie";
import lottie from "../../../../Utils";
const CardItem = ({ item, data }) => {
  const columns = [
    {
      title: "Tên Bài tập	",
      dataIndex: "tenBaiTap",
    },
    {
      title: "Trạng Thái",
      dataIndex: "trangThai",
      render: (trangThai) => <Tag color="volcano">{trangThai}</Tag>,
    },
    {
      title: "Loại Bài Tập",
      dataIndex: "loaiBaiTap",
    },
    {
      title: "Điểm",
      dataIndex: "diem",
    },
    {
      title: "Nhận xét",
      dataIndex: "nhanXet",
      render: (nhanXet) =>
        nhanXet !== "" && <FaCommentDots size={15} className="text-center" />,
    },
  ];

  return (
    <div className="flex h-64 space-x-2">
      {/* Left */}
      <div className="w-1/3 p-3">
        {/* background: 
        linear-gradient(209.21deg, rgb(4, 55, 174) 13.57%,
         rgb(29, 81, 146) 98.38 */}
        <div className="flex justify-between items-center bg-gradient-to-tr from-[#022e94] to-[#1f5ba5] h-full rounded-3xl space-x-6 p-2 hover:scale-105 transition-all duration-500 cursor-pointer  ">
          <div className="w-1/2">
            <img
              src={`https://backend.cyberlearn.vn${item.hinhAnh}`}
              className="w-80 h-36 "
              alt=""
            />
          </div>
          <div className="w-1/2">
            <p className="text-lg font-medium text-white">{item.tenKhoaHoc}</p>
          </div>
        </div>
      </div>

      {/* Right Table */}
      <div className="w-2/3  bg-transparent flex items-center">
        <div className="w-full rounded-lg shadow-lg ">
          <Table
            pagination={{
              position: "bottom",
              pageSize: 3,
            }}
            columns={columns}
            dataSource={data}
            size="small"
            className="text-center"
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
