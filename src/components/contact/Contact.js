import MailIcon from "../../assets/mail.svg";
import FacebookIcon from "../../assets/facebook.svg";
import TwitterIcon from "../../assets/twitter.svg";

import stl from "./Contact.module.scss";

const Contact = () => {
  const submitHandler = (e) => {
    console.log("submit");
  };

  return (
    <div className={stl.container}>
      <form onSubmit={submitHandler}>
        <h1>Let's Connect</h1>
        <label for="name">Your Name</label>
        <input type="text" name="name" placeholder="John Doe" required />
        <label for="email">Your Email</label>
        <input
          type="email"
          name="email"
          placeholder="johndoe@example.com"
          required
        />
        <label for="message">Your Message</label>
        <textarea
          name="message"
          placeholder="Please make it short and meaningful."
          required
        ></textarea>
        <input type="submit" value="Send" />
      </form>
      <div className={stl.divider}></div>
      <div className={stl.contact}>
        <div>
          <h1>More ways to connect</h1>
        </div>
        <div className={stl.followBtn}>
          <a href="http://www.facebook.com" target="_blank">
            <span>Write us an email</span>
            <div className={stl.iconContainer}>
              <MailIcon />
            </div>
          </a>
        </div>
        <div className={stl.followBtn}>
          <a href="http://www.facebook.com" target="_blank">
            <span>Connect us on</span>
            <div className={stl.iconContainer}>
              <FacebookIcon />
            </div>
          </a>
        </div>
        <div className={stl.followBtn}>
          <a href="http://www.twitter.com" target="_blank">
            <span>Follow us on</span>
            <div className={stl.iconContainer}>
              <TwitterIcon />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
