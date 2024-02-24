import { NavLink } from "react-router-dom";
import { INavLink } from "../../types";
import { cn } from "../../utils/helper";
import { activeListItem, listItem } from "../../styles";

interface SidebarNavItemProps {
  link: INavLink;
  closeSideBar: () => void;
}

const SidebarNavItem = ({ link, closeSideBar }: SidebarNavItemProps) => {
  return (
    <li>
      <NavLink
        to={link.path}
        className={({ isActive }) => {
          return cn(listItem, isActive && activeListItem);
        }}
        onClick={closeSideBar}
      >
        {<link.icon className="text-[18px]" />}
        <span>{link.title}</span>
      </NavLink>
    </li>
  );
};

export default SidebarNavItem;
