import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import GreenTick from "../assets/green-tick.svg";
import RedCross from "../assets/red-x-icon.webp";

Modal.setAppElement("#root");

const SignUpForm = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loginFlag, setLoginFlag] = useState(false);
  const [showLoader, setShowLoader] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
    setTimeout(closeModal, 3000);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = async (event) => {
    setShowLoader(true);

    event.preventDefault();

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/users/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          username: usernameRef.current.value,
        }),
      }
    );

    if (response.ok) {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailRef.current.value,
            password: passwordRef.current.value,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.accessToken);
        setShowLoader(false);
        setLoginFlag(true);
        openModal();
        setShowLoader(true);
        navigate("/");
        setShowLoader(false);
      }
    } else {
      setShowLoader(false);
      setLoginFlag(false);
      openModal();
    }
  };

  return (
    <div className="wrapper text-center h-screen">
      {showLoader && (
        <div className="loaderContainer absolute z-20 h-screen w-full flex flex-col justify-center items-center bg-white/50 backdrop-blur-sm text-3xl font-semibold">
          <div className="loadingAnimation"></div>
          Loading...
        </div>
      )}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Transaction Details"
        className="Modals w-full flex fixed top-16 justify-center z-20"
        overlayClassName="Overlay"
      >
        <div className="w-fit rounded-lg p-2 bg-gray-50 m-2 shadow-lg">
          {loginFlag && (
            <div className="h-6 flex items-center font-semibold">
              <img src={GreenTick} className="h-6 mr-2" />
              Sign Up Successful
            </div>
          )}
          {!loginFlag && (
            <div className="h-6 flex items-center font-semibold">
              <img src={RedCross} className="h-6 mr-2" />
              Email Already Taken
            </div>
          )}
        </div>
      </Modal>
      <h1 className="text-5xl mb-10">
        <b>Register</b>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="p-5 rounded-xl border-2 border-blue-50 shadow-lg shadow-blue-500/50"
      >
        <div className="input-box text-xl my-2">
          <input
            ref={usernameRef}
            type="text"
            className="p-2 outline-none w-80 border-b-2 mb-6"
            placeholder="Full Name"
            required
          />
        </div>
        <div className="input-box text-xl my-2">
          <input
            ref={emailRef}
            type="text"
            className="p-2 outline-none w-80 border-b-2 mb-6"
            placeholder="Email"
            required
          />
        </div>
        <div className="input-box text-xl my-2">
          <input
            ref={passwordRef}
            type="password"
            className="p-2 outline-none w-80 border-b-2"
            placeholder="Password"
            required
          />
        </div>
        <button
          type="submit"
          className="mt-5 bg-cyan-500 text-white px-4 py-2 hover:bg-cyan-600"
        >
          <p className="text-xl">Register</p>
        </button>
        <div className="register-link mt-5">
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-cyan-900 underline">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
