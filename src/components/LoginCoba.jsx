import Logo from "/LogresAssets/img/logo.png";
import "../css/Logres.css";
import axios from "axios";
import { useState } from "react";
import { Link,  useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const dataAkun = dataAkun
const dataAkun =() =>{
    const dataStorage = JSON.parse(localStorage.getItem("account"));

    if(dataStorage != null){
        window.location.reload()
    }
}
const handleEmail = (e) => {
  setEmail(e.target.value);
};
const handlePassword = (e) => {
  setPassword(e.target.value);
};

async function checkAkun(email,password){
    const data = await axios("https://63528ae6a9f3f34c37409536.mockapi.io/logres");

    const dataAkun = await data.json;
    const dataEmail = {
        id:0,
        email:""
    }
    const hasil = false;

    dataAkun.forEach(element => {
        if(element.email == email && element.password == password){
            hasil = true;
            dataEmail.id = element.id;
            dataEmail.email = element.email;
        }
    });

    if(hasil){
        
        localStorage.setItem("account",JSON.stringify(dataEmail));

        window.location.reload()
        // console.log("berhasil login");
    }else{
        alert("Email atau password anda salah!");
        // console.log("email atau password anda salah!");
    }

}

const handleBtn = (e) =>{
    e.preventDefault();
    checkAkun(email.value,password.value)
}
  return (
    <>
     
      <section className="container">
        <div className="row">
        <div className="row">
          <div className="col text-center">
            <img src={Logo} alt="logo" width="400rem" className="logo-logres"/>
          </div>
          <div className="col">
            <form id="form">
              <h1 className="text-center">LOGIN</h1>
              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email-login"
                  aria-describedby="emailHelp"
                  value={email} onChange={handleEmail}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password-login"
                  value={password} onChange={handlePassword}
                />
              </div>
              <div className="text-center d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  // style="--bs-bg-opacity: 0.5"
                  id="btn-login"
                  onClick={handleBtn}
                >
                  Submit
                </button>
                <Link to={"/register"} style={{textDecoration:"none"}}>Belum punya akun?</Link>
              </div>
            </form>
          </div>
        </div>
        </div>
      </section>
      
    </>
  );
};
export default Login;
