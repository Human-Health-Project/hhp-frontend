import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import "./Login.css";

export default function VerifyEmail() {
  const [params] = useSearchParams();
  const [message, setMessage] = useState("Verifying your email...");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const url = params.get("url");
    if (!url) {
      setMessage("This verification link is incomplete.");
      return;
    }
    fetch(url, { headers: { Accept: "application/json" } })
      .then(async (response) => {
        const data = await response.json().catch(() => ({}));
        if (!response.ok) throw new Error(data.message || "Verification failed.");
        setSuccess(true);
        setMessage(data.message || "Email verified successfully.");
      })
      .catch((error) => setMessage(error.message));
  }, [params]);

  return (
    <section className="authPage"><div className="authContainer">
      <h1 className="authTitle">Email verification</h1>
      <p className={success ? "authSubtitle" : "authError"}>{message}</p>
      <Link className="authLink" to="/login">Continue to login</Link>
    </div></section>
  );
}
