import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "../../App";
import rasm1 from '../Images/delivery1.jpg'
import logo from '../Images/image.png'

export default function Welcome() {
  const { isLogin } = useContext(LoginContext);

  return (
    <div className="container py-1">
      <header>
        <div className="row position-relative">
          <div className="col">
            <img src={logo} alt="" className="text-white" style={{ width: "200px" }} />
          </div>
          <div className="col position-absolute text-end">
            {isLogin ? (
              <Link to={"/dashboard"} className="btn btn-primary me-3">
                Dashboard
              </Link>
            ) : (
              <Link to={"/login"} className="btn btn-primary">
                {" "}
                Sign in
              </Link>
            )}
          </div>
          <hr />
        </div>
      </header>
      <div>
        <div className="row py-5">
          <div className="col">
            <p className="h1 text-center py-5">
              The best <br /> way to deliver  <br /> your products.
            </p>
            <p className="h3">Ali express 24 bilan tez  va ishonchli yetkazma <br />
            va o'tkazmalarni amalga oshiring</p>
          </div>
          <div className="col">
            <img src={rasm1} alt="" className="w-100"/>
          
          </div>
        </div>
      </div>
    </div>
  );
}
