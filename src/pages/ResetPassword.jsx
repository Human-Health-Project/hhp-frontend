import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { api } from "../services/api";
import "./Login.css";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      await api.resetPassword({
        token: params.get("token"),
        email: params.get("email"),
        password,
        password_confirmation: confirmation,
      });
      navigate("/login", { replace: true });
    } catch (error) {
      setMessage(Object.values(error.errors || {})[0]?.[0] || error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="authPage"><div className="authContainer">
      <h1 className="authTitle">Reset password</h1>
      {message && <div className="authError">{message}</div>}
      <form className="authForm" onSubmit={submit}>
        <label className="authLabel" htmlFor="new-password">New password</label>
        <input className="authInput" id="new-password" type="password" minLength="8" required value={password} onChange={(e) => setPassword(e.target.value)} />
        <label className="authLabel" htmlFor="confirm-password">Confirm password</label>
        <input className="authInput" id="confirm-password" type="password" minLength="8" required value={confirmation} onChange={(e) => setConfirmation(e.target.value)} />
        <button className="authPrimaryBtn" disabled={loading}>{loading ? "Resetting..." : "Reset password"}</button>
      </form>
      <Link className="authLink" to="/login">Back to login</Link>
    </div></section>
  );
}
