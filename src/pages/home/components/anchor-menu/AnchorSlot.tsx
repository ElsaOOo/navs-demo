import React from "react";
export interface NavItem {
  /** 菜单名称 */
  title: string;
  /** 唯一标志，定位hash值 */
  hashKey: string;
  /** 二级以下菜单 */
  children?: NavItem[];
}
export interface NavGroup extends NavItem {
  children: NavItem[];
}
const isNavGroup = (nav: NavItem): nav is NavGroup =>
  "children" in nav && !!nav.children;
const NavSelf = (props: NavItem) => {
  return (
    <div className="jbl-anchor-menu-item" data-hashkey={props.hashKey}>
      <span data-hashkey={props.hashKey} className="jbl-anchor-menu-item__link">
        {props.title}
      </span>
    </div>
  );
};

const NavGroup = (props: NavGroup) => {
  return (
    <div className="jbl-anchor-menu-group">
      <div className="jbl-anchor-menu-group__title">{props.title}</div>
      {props.children.map((g, index) => (
        <NavSelf {...g} key={g.hashKey} />
      ))}
    </div>
  );
};

type AnchorSlotProps = NavItem;
const AnchorSlot = (props: AnchorSlotProps) => {
  if (isNavGroup(props)) {
    return <NavGroup {...props} />;
  }
  return <NavSelf {...props} />;
};

export default React.memo(AnchorSlot);
