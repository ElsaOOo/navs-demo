import React, { useEffect } from "react";
import "./style.less";
import AnchorSlot, { NavItem } from "./AnchorSlot";
import { getElementTop } from "./util";
export interface Props {
  data: NavItem[];
  /** 锚点滚动偏移量 */
  targetOffset?: number;
}
const AnchorMenu: React.FC<Props> = (props) => {
  const { data, targetOffset } = props;
  const handleScrollTo = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.persist();
    event.stopPropagation();
    if (
      !event.target ||
      !Object.keys((event.target as HTMLElement).dataset).length
    ) {
      return;
    }
    const { hashkey } = (event.target as HTMLElement).dataset;
    if (!hashkey) {
      return;
    }
    const targetEl = document.getElementById(hashkey);
    if (targetEl) {
      const scrollTop = getElementTop(targetEl);
      window.scrollTo({
        // @ts-ignore
        top: scrollTop - (targetOffset || 0),
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="jbl-anchor-menu">
      <div className="jbl-anchor-menu-list" onClick={handleScrollTo}>
        {data.map((item) => (
          <AnchorSlot
            title={item.title}
            hashKey={item.hashKey}
            children={item.children}
            key={item.hashKey}
          />
        ))}
      </div>
    </div>
  );
};

export default AnchorMenu;
