import axios from "axios";
import React, { useState } from "react";

function ContactUs() {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const user = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/contact`, data);
    setData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const { name, email, subject, message } = data;

  return (
    <div className="container  mb-4">
      <h2 class="h1-responsive font-weight-bold text-center my-4">
        Contact us
      </h2>{" "}
      <p class="text-center justify-content-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us
        directly. Our team will come back to you within a matter of hours to
        help you.
      </p>
      <div class="row ml-5 pl-5">
        <div class="col-md-9 mb-md-0 mb-5">
          <form onSubmit={onSubmit}>
            <div class="row">
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="name" class="">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div class="col-md-6">
                <div class="md-form mb-0">
                  <label for="email" class="">
                    Your email
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form mb-0">
                  <label for="subject" class="">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="md-form">
                  <label for="message">Your message</label>
                  <textarea
                    type="text"
                    name="message"
                    value={message}
                    onChange={handleChange}
                    rows="2"
                    class="form-control md-textarea"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class=" text-md-left mt-2">
              <button class="btn btn-primary button3" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
