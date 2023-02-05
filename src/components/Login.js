import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast("Logged in successfully");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        alert(errorCode);
      });
  };

  const provider = new GoogleAuthProvider();
  const signupwithgoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        toast("Signed up successfully");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        alert(errorCode);
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const passwordreset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toast("Password reset email sent!")
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
  };

  return (
    <div className="login-container">
      <div className="form">
        <div id="legend">
          <legend class="">Login</legend>
        </div>
        {/* <!-- Email input --> */}
        <div class="form-outline mb-3">
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label class="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        {/* <!-- Password input --> */}
        <div class="form-outline mb-2">
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label class="form-label" for="form2Example2">
            Password
          </label>
        </div>

        {/* <!-- 2 column grid layout for inline styling --> */}
        <div class="row mb-3">
          <div class="col d-flex justify-content-start">
            {/* <!-- Simple link --> */}
            <a href="#!" onClick={passwordreset}>
              Forgot password?
            </a>
          </div>
        </div>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>

        {/* <!-- Submit button --> */}
        <button
          type="button"
          class="btn btn-primary btn-block mb-4"
          onClick={login}
        >
          Login
        </button>
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        {/* <!-- Register buttons --> */}
        <div class="text-center">
          <p>
            Not a member? <Link to="/signup">Signup</Link>
          </p>
          <div class="divider my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <button
            class="btn google-btn"
            style={{ "background-color": "#4285f4" }}
            onClick={signupwithgoogle}
          >
            <div className="icon-wrapper">
              <i class="fa-brands fa-google"></i>
            </div>
            <span className="btn-text">
              <b>Continue with Google</b>
            </span>
          </button>
          <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
        </div>
      </div>
    </div>
  );
};

export default Login;
