import React from "react";
import PageHeader from "../../components/page-header";
import AnchorMenu from "./components/anchor-menu";
import Content from "./Content";
import "./style.less";
import { navsData, navsSingleData } from "./constants";
const Home = () => {
  return (
    <div className="main-page">
      <PageHeader />
      <div className="content-wrapper">
        <AnchorMenu data={navsData} targetOffset={60} />
        <Content />
      </div>
    </div>
  );
};

export default Home;
