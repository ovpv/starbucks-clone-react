import AppLayout from "../../components/common/AppLayout";
import HomeBanner from "./HomeBanner";
import "./homepage.css";

export default function HomePage() {
  return (
    <AppLayout header footer>
      <main className="home">
        <div className="container-md">
          <div className="row">
            <div className="col-1"></div>
            <div className="col-10">
              <HomeBanner />
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
