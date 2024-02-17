import { useState } from "react";
import emailjs from "@emailjs/browser";
import classes from "../styles/ContactUs.module.css";
const ContactUs = () => {
  const [btn, setBtn] = useState({
    disabled: false,
    text: "Send Message",
  });
  const submitContact = async (e) => {
    emailjs.init("tXbbN40r2QMUY3K3E");
    e.preventDefault();
    const data = {
      email: e.target[0].value,
      name: e.target[1].value,
      message: e.target[2].value,
    };

    setBtn({ disabled: true, text: "Sending..." });
    let email = await emailjs.send(
      "tushcutz_response",
      "template_bho67r5",
      data
    );
    if (email.text == "OK") {
      alert("Message sent successfully");
    }
    setBtn({
      disabled: false,
      text: "Send Message",
    });
  };
  return (
    <div id='contact-us' className={classes.contact + ' min-vh-100 bg-secondary  bg-opacity-25'}>
      <div
        className={
          classes.contact_container + " vh-100 container d-flex border"
        }
      >
        <div className=' row align-self-center '>
          <div className='col-12 col-sm-6'>
            <div>
              <h1>Get in touch with us</h1>
              <p>
                The technological revolution is changing aspect of our lives,
                and the fabric of society itself. it's also changing the way we
                learn and what we learn. Factual knowledge is less prized when
                everything you ever need to know can be found on your phone.
                There's no imperative to be an expert Factual knowledge is less
                prized when everything you ever need to know can be found at
                doing everything
              </p>
            </div>
          </div>
          <form
            onSubmit={(event) => submitContact(event)}
            className='col-12 col-md-6'
          >
            <div className="px-3">
              <div className='row mb-3'>
                <input
                  className='col form-control bg-transparent text-dark me-1 border border-3 border-danger p-3'
                  type='email'
                  placeholder='Email'
                  required
                />
                <input
                  className='col form-control bg-transparent text-dark ms-1 border border-3 border-danger p-3'
                  type='text'
                  placeholder='Full Name'
                  required
                />
              </div>

              <textarea
                name=''
                id=''
                className='border form-control bg-transparent text-dark mb-3  border-3 m-0 border-danger p-3'
                placeholder='Message'
                rows='5'
                required
              ></textarea>

              <button
                id='emailButton'
                type='submit'
                disabled={btn.disabled}
                className='btn btn-danger px-4 p-2 btn-lg'
              >
                {btn.text}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
