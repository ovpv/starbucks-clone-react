import StarbucksLogo from "../../../assets/starbucks.svg";
import locationIcon from "../../../assets/location-icon.svg";
import "./appheader.css";
import AppMenu from "./AppMenu";
import { Link } from "react-router-dom";

export interface AppHeaderProps {}

export default function AppHeader() {
  return (
    <header className="appheader">
      <div className="container d-flex flex-row">
        <div className="left logo col-1">
          <Link to={"/"}>
            <img src={StarbucksLogo} alt="starbucks logo" />
          </Link>
        </div>
        <div className="middle col-8 d-flex align-items-center">
          <AppMenu />
        </div>
        <div className="right col-3 d-flex align-items-center justify-content-between">
          <Link
            to={"/store-locator"}
            className="location d-flex justify-content-center align-items-center"
          >
            <img src={locationIcon} alt="location icon" />
            <div className="d-flex ps-2">Find a store</div>
          </Link>
          <Link className="register-link px-3 py-1" to={"/register"}>
            Join now
          </Link>
          <Link className="login-link px-3 py-1" to={"/login"}>
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
