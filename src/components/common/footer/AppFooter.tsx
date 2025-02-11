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
        <div className="container d-flex flex-column mb-5">
          <div className="row">
            <div className="left logo col-1">
              <Link to={"/"}>
                <img src={StarbucksLogo} alt="starbucks logo" />
              </Link>
            </div>
            <div className="middle col-8">
              <AppFooterLinks />
            </div>
            <div className="right col-3"></div>
          </div>
          <div className="secondaryFooterLinks row">
            <div className="left col-1"></div>
            <div className="middle col-11 mt-5">
              <div className="row d-flex justify-content-between ">
                <div className="d-flex flex-column col-7">
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
                <div className="download-apps d-flex p-4 col-4">
                  <div>
                    <h4>Start ordering ahead with the Starbucks® UK app</h4>
                    <p>
                      Order and pay — then breeze in to pick up your drink at
                      your selected store.
                    </p>
                    <div className="d-flex row g-2">
                      <div className="d-flex col-6">
                        <img
                          height={"53px"}
                          width={"159px"}
                          src="https://www.starbucks.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp-store-badge.e1ee0667.webp&w=384&q=75"
                          alt="ios app store"
                        />
                      </div>
                      <div className="d-flex col-6">
                        <img
                          height={"53px"}
                          width={"159px"}
                          src="https://www.starbucks.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgoogle-play-badge.ef99e4cb.webp&w=384&q=75"
                          alt="android play store"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="right col-5"></div> */}
        </div>
      </footer>
    </>
  );
}
