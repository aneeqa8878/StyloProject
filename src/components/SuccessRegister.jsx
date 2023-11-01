import React, { useState } from 'react';

function Signup() {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSignup = () => {
    // Simulate a successful registration
    // In a real application, you would send a request to your server and handle the response accordingly
    // For now, we're just simulating success
    setShowSuccessMessage(true);

    // You can also reset the form or redirect the user to the login page here
  };

  return (
    <div>
      <section
        className="vh-100 bg-image"
        style={{
          backgroundimage:
            "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp');"
        }}
      >
        {/* ... Your existing signup form code ... */}
        <form>
          {/* ... Your form fields ... */}
          <div className="d-flex justify-content-center">
            <button className="button2" onClick={handleSignup}>
              Register
            </button>
          </div>
        </form>

        {/* Success message popup */}
        {showSuccessMessage && (
          <div
            className="alert alert-success alert-dismissible fade show"
            role="alert"
          >
            Successfully registered! Please <a href="#!">login here</a>.
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
              onClick={() => setShowSuccessMessage(false)}
            ></button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Signup;
