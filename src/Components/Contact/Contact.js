import React from "react";
import "./Contact.css";
import contactImg from "../../images/contact.jpg";

const Contact = () => {
    return (
        <div
            className="contact-area"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${contactImg})`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: `cover`,
            }}
        >
            <div className="container">
                <h2 className="text-uppercase text-bold text-white">
                    Contact Me
                </h2>
                <div className="line mb-5"></div>
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center ">
                        <div className="contact-details text-start text-white">
                            <div className="contact-icon">
                                <i class="fa-solid fa-phone"></i>
                                <span>+88 01714-938531</span>
                            </div>
                            <div className="contact-icon">
                                <i class="fa-solid fa-at"></i>
                                <span>ramash3828@gmail.com</span>
                            </div>
                            <div className="contact-icon">
                                <i class="fa-solid fa-location-dot"></i>
                                <span>Keshabpur, Jessore, Bangladesh</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-area hero">
                            <form>
                                <div className="input-group">
                                    <input type="text" required />
                                    <label for="">
                                        <i className="far fa-user"></i> Your
                                        Name
                                    </label>
                                </div>

                                <div className="input-group">
                                    <input type="mail" required />
                                    <label for="">
                                        <i className="far fa-envelope"></i> Your
                                        E-mail
                                    </label>
                                </div>

                                <div className="input-group">
                                    <textarea
                                        id="massage"
                                        rows="6"
                                        required
                                    ></textarea>
                                    <label for="">
                                        <i className="far fa-comments"></i>{" "}
                                        Massage
                                    </label>
                                </div>
                                <button className="form-btn" type="submit">
                                    Submit{" "}
                                    <i className="far fa-paper-plane"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
