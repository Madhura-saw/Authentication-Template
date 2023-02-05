import { getAuth, signOut } from "firebase/auth";
import app from "../firebase";
import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  const auth = getAuth(app);
  const logout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast("Signed out successfully");
      })
      .catch((error) => {
        // An error happened.
        const errorCode = error.code;
        const errorMessage = error.message;
        toast(errorMessage);
      });
  };

  return (
    <>
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
        <div class="container-fluid ">
          <a class="navbar-brand " href="/#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link to="/" class="nav-link">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login" class="nav-link">
                  Login
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/signup" class="nav-link">
                  Signup
                </Link>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={logout}>
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
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
      <Outlet />
    </>
  );
};

export default Navbar;
