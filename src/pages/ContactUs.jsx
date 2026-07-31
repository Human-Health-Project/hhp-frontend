import { useState } from "react";
import { api } from "../services/api";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setStatus("");
    try {
      const response = await api.contact(form);
      setStatus(response.message);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(Object.values(error.errors || {})[0]?.[0] || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="oe-container" style={{ padding: "60px 20px" }}>
      <h1>Contact Us</h1>
      {status && <p>{status}</p>}
      <form className="authForm" onSubmit={submit}>
        <label className="authLabel" htmlFor="contact-name">Name</label>
        <input className="authInput" id="contact-name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <label className="authLabel" htmlFor="contact-email">Email</label>
        <input className="authInput" id="contact-email" type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <label className="authLabel" htmlFor="contact-message">Message</label>
        <textarea className="authInput" id="contact-message" required rows="6" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
        <button className="authPrimaryBtn" disabled={loading}>{loading ? "Sending..." : "Send message"}</button>
      </form>
    </div>
  );
};

export default ContactUs;
