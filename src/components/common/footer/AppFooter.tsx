import { Link } from "react-router-dom";
import StarbucksLogo from "../../../assets/starbucks.svg";
import "./appFooter.css";
import AppFooterLinks from "./AppFooterLinks";
import FacebookIcon from "../../../assets/facebook.svg";
import PinterestIcon from "../../../assets/pinterest.svg";
import InstagramIcon from "../../../assets/instagram.svg";
import TwitterIcon from "../../../assets/twitter.svg";

export default function AppFooter() {
  return (
    <>
      <footer className="appFooter">
        <div className="container d-flex flex-column">
          <div className="row">
            <div className="left logo col-1">
              <img src={StarbucksLogo} alt="starbucks logo" />
            </div>
            <div className="middle col-8">
              <AppFooterLinks />
            </div>
            <div className="right col-3"></div>
          </div>
          <div className="secondaryFooterLinks row">
            <div className="left col-1"></div>
            <div className="middle col-6 flex-column mt-5">
              <nav className="d-flex row g-2 px-4 py-3">
                <div className="col">
                  <Link to={""}>Contact Us</Link>
                </div>
                <div className="col">
                  <Link to={""}>Privacy Policy</Link>
                </div>
                <div className="col">
                  <Link to={""}>Terms of Use</Link>
                </div>
                <div className="col">
                  <Link to={""}>Cookie Consent</Link>
                </div>
                <div className="col">
                  <Link to={""}>Cookie Notice</Link>
                </div>
              </nav>
              <nav className="social-links d-flex row g-2">
                <div className="col">
                  <Link to={""}>
                    <img src={FacebookIcon} alt="facebook" />
                  </Link>
                </div>
                <div className="col">
                  <Link to={""}>
                    <img src={PinterestIcon} alt="pinterest" />
                  </Link>
                </div>
                <div className="col">
                  <Link to={""}>
                    <img src={InstagramIcon} alt="instagram" />
                  </Link>
                </div>
                <div className="col">
                  <Link to={""}>
                    <img src={TwitterIcon} alt="twitter" />
                  </Link>
                </div>
              </nav>
            </div>
            <div className="right col-5"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
