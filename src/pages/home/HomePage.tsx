import AppLayout from "../../components/common/AppLayout";
import CtaCardSection from "../../components/home/CtaCardSection";
import FindStore from "../../components/home/FindStore";
import HomeBanner from "../../components/home/HomeBanner";
import HomePageProductSection from "../../components/home/ProductSection";
import SayHello from "../../components/home/SayHello";
import "./homepage.css";

export default function HomePage() {
  return (
    <AppLayout header footer>
      <main className="home">
        <div className="container-md">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <div className="py-5">
                <HomeBanner />
              </div>
              <div className="py-5">
                <SayHello />
              </div>
              <div className="py-5">
                <CtaCardSection />
              </div>
              <div className="py-5">
                <HomePageProductSection />
              </div>
              <div className="py-5">
                <FindStore />
              </div>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
