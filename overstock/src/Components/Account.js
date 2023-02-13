import styles from "./Account.module.css";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { useState } from "react";
import axios from "axios";

const SignAccountdata = {
  Name: "",
  Email: "",
  Password: "",
};

const Loginaccountdata = {
  Email: "",
  Password: "",
};

export const Account = () => {
  const [data, setdata] = useState(SignAccountdata);
  const [logindata, setlogindata] = useState(Loginaccountdata);

  const Signupdata = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const Signindata = (e) => {
    setlogindata({...logindata,[e.target.name]:e.target.value})
  }

  const CreateAccount = () => {
    console.log("sdfsdf");

    axios
      .post("http://localhost:8000/Signup", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };


  const logdata = () => {
    axios.post("http://localhost:8000/Login",logindata).then((res)=>console.log(res)).catch((err)=>console.log(err))
  }

  return (
    <>
      <Navbar />
      <hr style={{ marginTop: "-7px" }}></hr>

      <div className={styles.account}>
        <div className={styles.accountcreate}>
          <h1>Create Account</h1>
          <p style={{ color: "grey" }}>Name *</p>
          <input
            onChange={Signupdata}
            type="string"
            placeholder="Name"
            name="Name"
          ></input>

          <p style={{ color: "grey" }}>Email Address *</p>
          <input
            onChange={Signupdata}
            type="email"
            placeholder="Email"
            name="Email"
          ></input>
          <div>
            <p style={{ color: "grey" }}>Create Password*</p>
            <input
              onChange={Signupdata}
              type="password"
              placeholder="Password"
              name="Password"
            ></input>

            <p style={{ color: "grey" }}>Confirm Password*</p>
            <input
              onChange={Signupdata}
              type="password"
              placeholder="Confirm Password"
            ></input>
          </div>

          <div className={styles.accountcreateexclusive}>
            <p>
              Sign up today for <b> exclusive offers </b> from Overstock.com
              delivered right to your inbox**
            </p>
          </div>

          <div onClick={CreateAccount} className={styles.accountcreatebutton}>
            Create Account
          </div>

          <p className={styles.accountcreateguest}>
            By creating an account or continuing as a Guest, you agree to our{" "}
            <Link to="https://help.overstock.com/help/s/article/TERMS-AND-CONDITIONS">
              {" "}
              <u style={{ color: "blue" }}>Terms & Conditions </u>{" "}
            </Link>
            and{" "}
            <Link to="https://help.overstock.com/help/s/article/PRIVACY-AND-SECURITY-POLICY">
              {" "}
              <u style={{ color: "blue" }}>Privacy Policy.</u>{" "}
            </Link>
          </p>

          <div className={styles.accountcreateunsubscribe}>
            <p>
              {" "}
              <Link to="https://help.overstock.com/help/s/article/TERMS-AND-CONDITIONS">
                {" "}
                <u style={{ color: "blue" }}>Terms & Conditions </u>{" "}
              </Link>{" "}
              |{" "}
              <Link to="https://help.overstock.com/help/s/article/PRIVACY-AND-SECURITY-POLICY">
                {" "}
                <u style={{ color: "blue" }}>Privacy Policy </u>{" "}
              </Link>{" "}
            </p>
            <p>**You can unsubscribe at any time</p>
          </div>

          <div className={styles.accountreturn}>
            <p>Return Policy</p>
            <p>Contact Customer Care</p>
            <p>FAQ</p>
            <p>Privacy Policy</p>
            <p>Site User Terms & Conditions*</p>
            <p>© 2023 Overstock.com All Rights Reserved</p>
            <p>We self-certify compliance with:</p>
            <img src="https://ak1.ostkcdn.com/img/mxc/20200630-intl-privacy_shield.png"></img>
          </div>
        </div>

        <div className={styles.accountlogin}>
          <h2>Sign In</h2>
          <p style={{ color: "grey" }}>Email Address*</p>
          <input onChange={Signindata} type="email" placeholder="Email"  name="Email"></input>
          <p style={{ color: "grey" }}>Password*</p>
          <input onChange={Signindata} type="password" placeholder="Password"  name="Password"></input>
          <div onClick={logdata}>Sign In</div>
          <u style={{ fontSize: "14px", textAlign: "center" }}>
            Forgot your password?
          </u>
        </div>
      </div>
    </>
  );
};
