import AppLayout from "../../components/common/AppLayout";
import CtaCardSection from "./CtaCardSection";
import HomeBanner from "./HomeBanner";
import "./homepage.css";
import SayHello from "./SayHello";

export default function HomePage() {
  return (
    <AppLayout header footer>
      <main className="home">
        <div className="container-md">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="pb-5">
                <HomeBanner />
              </div>
              <div className="pb-5">
                <SayHello />
              </div>
              <div>
                <CtaCardSection />
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
