import React, { useState } from "react";
import "./style.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import app from "../firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import M from 'materialize-css';

const Signup = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signup = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // alert("Signed up successfully");
        toast("Signed up successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        alert(errorCode);
        // const errorMessage = error.message;
        // ..
      });
    setName("");
    setEmail("");
    setPassword("");

    sendEmailVerification(auth.currentUser).then(() => {
      toast("Email verification sent to your mail");
    });
    updateProfile(auth.currentUser, {
      displayName: name,
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
        toast("Sign up with Google successful");
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

  return (
    <div className="signup-container">
      <div className="form">
        {/* <fieldset> */}
        <div id="legend">
          <legend class="">Signup</legend>
        </div>
        <div class="control-group form-outline mb-3">
          {/* <!-- Username --> */}
          <label class="control-label" for="username">
            Username
          </label>
          <div class="controls">
            <input
              type="text"
              id="form2Example1"
              name="username"
              placeholder="Username"
              class="form-control"
              onChange={(e) => setName(e.target.value)}
            />
            <p class="help-block">
              Username can contain any letters or numbers, without spaces
            </p>
          </div>
        </div>

        <div class="control-group mb-3">
          {/* <!-- E-mail --> */}
          <label class="control-label" for="email">
            E-mail
          </label>
          <div class="controls">
            <input
              type="email"
              id="form2Example2"
              name="email"
              placeholder="Email"
              class="input-xlarge form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div class="control-group mb-3">
          {/* <!-- Password--> */}
          <label class="control-label" for="password">
            Password
          </label>
          <div class="controls">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              class="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
            <p class="help-block">Password should be at least 4 characters</p>
          </div>
        </div>

        <div class="control-group mb-3">
          {/* <!-- Password --> */}
          <label class="control-label" for="password_confirm">
            Password (Confirm)
          </label>
          <div class="controls">
            <input
              type="password"
              id="password_confirm"
              name="password_confirm"
              placeholder="Password"
              class="form-control"
            />
          </div>
        </div>

        <div class="control-group">
          {/* <!-- Button --> */}
          <div class="controls">
            <button
              type="submit"
              class="btn btn-primary btn-block"
              onClick={signup}
            >
              Signup
            </button>
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
        {/* </fieldset> */}
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
            <b>Signup with Google</b>
          </span>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </button>
      </div>
    </div>
  );
};

export default Signup;
