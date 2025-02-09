import StarbucksLogo from "../../../assets/starbucks.svg";
import "./appFooter.css";
import AppFooterLinks from "./AppFooterLinks";

export default function AppFooter() {
  return (
    <>
      <footer className="appFooter">
        <div className="container d-flex flex-row">
          <div className="left logo col-1">
            <img src={StarbucksLogo} alt="starbucks logo" />
          </div>
          <div className="middle col-8">
            <AppFooterLinks />
          </div>
          <div className="right col-3"></div>
        </div>
      </footer>
    </>
  );
}
