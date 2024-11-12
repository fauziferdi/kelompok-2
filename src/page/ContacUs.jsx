// src/components/ContactUs.jsx
import React from 'react';

const ContactUs = () => {
  return (
    <section className="contact-us py-5">
      <div className="container-fluid">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row p-2 m-4">
          <div className="col-md-6 card">
            <h5>Get in Touch</h5>
            <p>
              Have any questions or feedback? We'd love to hear from you! Fill
              out the form below or reach out to us directly at
              support@milkshakeparadise.com.
            </p>
            <p>
              Phone: (123) 456-7890<br />
              Address: 123 Milkshake Ave, Flavor Town, USA
            </p>
          </div>
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input type="text" className="form-control" id="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea className="form-control" id="message" rows="3"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
