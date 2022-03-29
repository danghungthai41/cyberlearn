import { Tabs } from "antd";
import React from "react";
const TabPane = Tabs;
const TopUsers = () => {
  function callback(key) {
    console.log(key);
  }
  return (
    <div className="flex flex-col space-y-2 p-4 w-full">
      <div>
        <p className="text-lg font-medium">Top Users</p>
      </div>
      <Tabs className="w-full" defaultActiveKey="1" onChange={callback}>
        <TabPane className="w-full" tab="Tích cực" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane  tab="Học giỏi" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane  tab="Cấp độ" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nobis praesentium repellendus, cupiditate non molestiae, aperiam omnis neque quia accusamus magni laboriosam voluptas quod optio, illo nemo vero. Animi impedit ab deleniti eligendi cupiditate soluta. Libero blanditiis inventore modi laudantium sapiente aut ratione ut ipsa. Voluptates laboriosam at natus ea cupiditate, fugit saepe id pariatur accusantium voluptatibus quidem enim, ratione dignissimos placeat esse doloribus rerum velit animi commodi quisquam, magnam alias asperiores. Sunt optio deleniti perspiciatis nesciunt voluptates repellat accusantium ex a quis recusandae ducimus ad, minus iusto officiis non pariatur quas amet animi et adipisci voluptatum aliquid molestiae cum unde? Quo molestiae, impedit deleniti adipisci, voluptas illum necessitatibus vero nostrum recusandae similique rerum sint fugiat, debitis optio quas doloremque perspiciatis sit dolores. Eius alias, voluptatem esse dicta blanditiis dolore reiciendis mollitia ex. Dolorem, magnam fugit dolores totam labore illum sit sunt quo quidem eaque impedit cupiditate quae cumque. Nesciunt deleniti illo quibusdam saepe fuga amet libero, quos est esse a. Eius maiores, iure molestiae eum reprehenderit in blanditiis modi numquam laboriosam placeat rem consequatur quia ducimus nesciunt, deleniti excepturi nemo voluptates voluptatem. Quasi, itaque molestias distinctio quos nam quidem, temporibus explicabo corporis, exercitationem maxime officia. Optio est, ab nulla deserunt aut amet, impedit laudantium illo a architecto tempore ea odit sapiente magnam molestias eligendi placeat nostrum doloremque tempora exercitationem laborum facilis. Omnis labore alias saepe, expedita ut ducimus reprehenderit hic doloremque. Aliquam perspiciatis voluptatibus cumque sed sint ullam corrupti blanditiis hic, consectetur ex est veritatis placeat numquam sit aliquid quisquam in porro labore culpa eum tenetur laudantium ipsum quo error? Sit beatae facere, ratione est iure voluptatem accusantium fugiat esse fugit eaque sint maxime provident rerum repudiandae iusto veritatis quod eligendi laboriosam quisquam. Cum nihil, ipsum illum voluptatibus laboriosam vitae? Voluptas at molestiae provident error ipsa nobis nulla cumque doloribus neque, in quis, libero ea quo laboriosam culpa quam aliquam harum, voluptatem repellendus. Quas minima aliquid excepturi, corrupti nam ratione. Adipisci, ipsam, animi totam sit fuga odit suscipit quae voluptatum impedit, dolorum temporibus debitis natus aliquam architecto ipsum vero error fugit tempora harum cupiditate! Inventore amet mollitia tenetur ut nesciunt, qui, accusamus saepe repellat eaque explicabo hic cumque esse facere facilis. Est fuga officiis reiciendis nisi, iste laborum nostrum voluptatem sapiente ex distinctio non quasi, modi nam a nemo, esse nulla quis molestias ullam nihil facere temporibus! Quasi non optio a cumque magnam numquam voluptatum architecto ab fugit, possimus cupiditate, aspernatur officiis veritatis odit ratione accusamus, qui facere. Rem voluptate laborum, assumenda quia et unde earum qui facere. Possimus doloribus sapiente nobis, numquam magnam ullam quod molestiae nam vel, eius deserunt necessitatibus dignissimos corporis harum itaque consequatur ipsam, magni laboriosam! Qui magni laudantium expedita animi nisi excepturi at nostrum incidunt, ullam, ipsa facilis nulla, vel cupiditate quas natus aperiam eum pariatur nobis? Commodi placeat error praesentium. Ipsam tempora repellendus rerum expedita voluptates mollitia ipsum eligendi aut qui unde enim accusamus fugit minima possimus, optio nam facere? Sequi neque quos maiores dolorem doloribus suscipit repellendus laudantium ab, repellat architecto. Velit!
    </div>
  );
};

export default TopUsers;
