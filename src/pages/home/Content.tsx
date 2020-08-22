import React from "react";
import { NavItem } from "./components/anchor-menu/AnchorSlot";
import { navsData, navsSingleData } from "./constants";

const cardsData = navsData.reduce((acc, cur) => {
  if (cur.children && Array.isArray(cur.children)) {
    acc = acc.concat(cur.children);
  } else {
    acc = acc.concat([cur]);
  }
  return acc;
}, [] as NavItem[]);

const Content = () => (
  <div className="content">
    {cardsData.map((c) => (
      <div key={c.hashKey} className="card" id={c.hashKey}>
        <div className="card-header">{c.title}</div>
        <div className="card-body">{c.title} content</div>
      </div>
    ))}
  </div>
);

export default React.memo(Content);
