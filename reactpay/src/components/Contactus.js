import React, { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
    message: "",
  });
  // Destructuring userData
  const { firstName, lastName, phoneNumber, email, address, message } =
    userData;

  const handleInput = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
  };

  // Connecting with firebase database
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (firstName && lastName && phoneNumber && email && address && message) {
      const res = await fetch(
        "https://reactpay-b9fb8-default-rtdb.firebaseio.com/userdb.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phoneNumber,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Submited Successfully!");
      } else {
        alert("Fill Required Data!");
      }
    } else {
      alert("Fill Required Data!");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="main-heading fw-bold">
                    Contact With Our <br /> Sales Team.
                  </h1>
                  <p className="main-hero-para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="contact-image"
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="contact-rightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="form-control"
                          placeholder="First Name"
                          onChange={handleInput}
                          value={firstName}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="form-control"
                          placeholder="Last Name"
                          onChange={handleInput}
                          value={lastName}
                        />
                      </div>
                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="phoneNumber"
                          id="phoneNumber"
                          className="form-control"
                          placeholder="Phone Number"
                          onChange={handleInput}
                          value={phoneNumber}
                        />
                      </div>

                      <div className="col-12 col-lg-6 contact-input-field">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          onChange={handleInput}
                          value={email}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 contact-input-field">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          className="form-control"
                          placeholder="Address"
                          onChange={handleInput}
                          value={address}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <input
                          type="text"
                          name="message"
                          id="message"
                          className="form-control"
                          placeholder="Your Message..."
                          onChange={handleInput}
                          value={message}
                        />
                      </div>
                    </div>
                    <div className="form-check form-checkbox-style">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label main-hero-para"
                        htmlFor="flexCheckDefault"
                      >
                        I agree that the thapatechnicalpay may contact me at the
                        email address or phone number above
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-style w-100"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
