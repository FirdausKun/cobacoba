// import "../css/style1.css";
import Logo from "../assets/img/logo.png";
import Bg from "../assets/img/Mountain.jpg";
const Test = () => {
  return (
    <>
    <h1>ini tes</h1>
      <section className="login">
        <div className="container">
          <div className="row">
            <div className="col-md-7 left">
              <img src={Bg} className="img" />
            </div>
            
            <div className="logo">
              <img src={Logo} className="logo" />
            </div>

            <div className="col-md-5 form">
              <div className="header">
                <h1>LOGIN</h1>
              </div>

              <form id="login">
                <label className="form-label">Email</label>
                <input type="email" className="form-control" id="email" />

                <label className="form-label">Password</label>
                <input type="password" className="form-control" id="password" />

                <button type="submit" id="signin" className="tombol">
                  Login
                </button>
                {/* <a className="signup" href="register.html">Belum Punya Akun?</a> */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Test;
