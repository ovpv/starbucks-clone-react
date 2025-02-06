import { Link } from "react-router-dom";
import { APP_MENU_LINKS, IMenu } from "./menuLinks";

interface IMenuProps extends IMenu {}

export function Menu({ text, path }: IMenuProps) {
  return (
    <span className="mx-4" key={path}>
      <Link to={path}>{text}</Link>
    </span>
  );
}

export default function AppMenu() {
  return (
    <>
      <div className="appmenu d-flex align-items-center">
        {APP_MENU_LINKS.map((m) => (
          <Menu {...m} />
        ))}
      </div>
    </>
  );
}
