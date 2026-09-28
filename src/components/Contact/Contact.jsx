import "./Contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

if (PUBLIC_KEY) {
  emailjs.init({ publicKey: PUBLIC_KEY });
}

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus({
        type: "error",
        message:
          "Email delivery is not configured yet. Add your EmailJS keys to the .env file before sending messages.",
      });
      return;
    }

    const form = formRef.current;
    const formData = new FormData(form);
    const senderEmail = String(formData.get("user_email") || "").trim();
    const senderName = String(formData.get("user_name") || "").trim();
    const subject = String(formData.get("user_subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!senderEmail || !senderName || !subject || !message) {
      setStatus({
        type: "error",
        message: "Please complete all details before sending the message.",
      });
      return;
    }

    setStatus({ type: "sending", message: "Sending your message..." });

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_name: senderName,
          user_email: senderEmail,
          user_subject: subject,
          message,
          from_name: senderName,
          reply_to: senderEmail,
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      setStatus({ type: "success", message: "Message sent successfully!" });
      form.reset();
    } catch (error) {
      const errorText = error?.text || error?.message || "Unknown EmailJS error";
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: `Message could not be sent. ${errorText}. Please check your EmailJS service, template, and public key.`,
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-title">
        <h2>Let&apos;s build something amazing together.</h2>
        <p>
          I&apos;m always open to discussing new ideas, product challenges, and exciting
          collaboration opportunities.
        </p>
      </div>

      <div className="contact-shell">
        <div className="contact-intro-block">
          <span className="section-tag">Contact</span>

          <p className="contact-intro">
            Whether you&apos;re hiring, building a brand, or launching a project, I&apos;d love
            to hear from you.
          </p>

          <div className="contact-methods">
            <div className="method-card">
              <div className="method-icon">
                <FaEnvelope />
              </div>
              <div className="method-copy">
                <span>Email</span>
                <p>balajibalu2102003@gmail.com</p>
              </div>
            </div>

            <div className="method-card">
              <div className="method-icon">
                <FaMapMarkerAlt />
              </div>
              <div className="method-copy">
                <span>Location</span>
                <p>Bangalore, India</p>
              </div>
            </div>
          </div>

          <div className="availability-pill">
            <span className="status-dot">
              <FaCircle />
            </span>
            Available for freelance work and new opportunities
          </div>
        </div>

        <div className="contact-form-panel">
          <div className="form-heading">
            <span className="mini-label">Send a Message</span>
            <h3>Tell me about your project</h3>
          </div>

          <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="field-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="user_name" type="text" placeholder="Your name" required />
              </div>

              <div className="field-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="user_email" type="email" placeholder="your.email@example.com" required />
              </div>
            </div>

            <div className="field-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="user_subject" type="text" placeholder="Project inquiry" required />
            </div>

            <div className="field-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="6" placeholder="Tell me about your project..." required />
            </div>

            <button type="submit" disabled={status.type === "sending"}>
              <FaPaperPlane />
              {status.type === "sending" ? "Sending..." : "Send Message"}
            </button>

            {status.message && <p className={`form-status ${status.type}`}>{status.message}</p>}
          </form>
        </div>
      </div>

    </section>
  );
}

export default Contact;