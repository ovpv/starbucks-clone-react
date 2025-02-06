import { Link } from "react-router-dom";

export default function HomeBanner() {
  return (
    <section className="homebanner d-flex mt-4">
      <div className="left col-5 d-flex flex-column justify-content-center p-4">
        <h3 className="pb-5">
          Starbucks <span>&reg;</span>
        </h3>
        <Link to="/app" className="mt-3">
          Download the Starbucks Uk app
        </Link>
      </div>
      <div className="right col-7">
        <img src="https://www.starbucks.co.uk/sites/starbucks-uk-pwa/files/styles/c20_hero_623x386/public/2025-01/3425%20UK%20AH%20MTR%20C20-Top%20Banner_623x384px_v03.png.webp?itok=7DYuP2z_" />
      </div>
    </section>
  );
}
