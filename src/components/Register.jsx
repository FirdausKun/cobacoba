import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Logo from "/LogresAssets/img/logo.png";

const Register = () => {
  const [nama,setNama] = useState("")
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")

  const handleNama = (e)=>{
    setNama(e.target.value)
  }
  const handleEmail = (e) =>{
    setEmail(e.target.value)
  }
  const handlePassword = (e) =>{
    setPassword(e.target.value)
  }
  const handleBtn = (e)=>{
    e.preventDefault()
    axios.post('https://63528ae6a9f3f34c37409536.mockapi.io/logres',{

      email:email,
      password:password
    }).then(result=>{
      console.log(result.data);
      alert("register success")
    }).catch(error=>{
      console.log(error);
      alert("error")
    })
  }
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="col text-center">
            <img src={Logo} alt="logo" width="400rem" className="logo-logres" />
          </div>
          <div className="col">
            <form id="form">
              <h1 className="text-center">REGISTER</h1>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input type="text" className="form-control" id="Uname-regis" value={nama} onChange={handleNama}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-regis"
                  aria-describedby="emailHelp"
                  value={email} onChange={handleEmail}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password1-regis"
                  value={password} onChange={handlePassword}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Re-Enter Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password2-regis"
                  value={password} onChange={handlePassword}
                />
              </div>
              <div className="text-center d-grid gap-2">
                <button
                  type="submit"
                  className="btn btn-success"
                  // style="--bs-bg-opacity: .5;"
                  id="btn-regis"
                  onClick={handleBtn}
                >
                  Submit
                </button>
                <Link to={"/"} style={{textDecoration:"none"}}>Sudah punya akun?</Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;
