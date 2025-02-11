import AppLayout from "../../components/common/AppLayout";
import "./loginpage.css";

export default function LoginPage() {
  return (
    <AppLayout header footer>
      <main className="loginPage">
        <div className="row">
          <section className="left col-6">
            <div className="back">
              <p>back</p>
            </div>
            <div className="login form">
              <div>
                <h4>Sign in</h4>
                <p>Required fields are marked with an asterisk*</p>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="emailField"
                  placeholder="name@example.com"
                />
                <label htmlFor="emailField">Email address</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  id="passwordField"
                  placeholder="name@example.com"
                />
                <label htmlFor="passwordField">Password</label>
              </div>
            </div>
          </section>
          <section className="right col-6">
            <img
              src="https://www.starbucks.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsidebar-image.8d4605ac.jpg&w=3840&q=75"
              alt="Login image"
            />
          </section>
        </div>
      </main>
    </AppLayout>
  );
}
