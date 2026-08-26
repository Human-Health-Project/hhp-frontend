import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./Login.css";

import googleIcon from "../assets/social/google.svg";
import facebookIcon from "../assets/social/facebook.svg";
import appleIcon from "../assets/social/apple.svg";
import microsoftIcon from "../assets/social/microsoft.svg";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, signInWithGoogle, signInWithFacebook, signInWithApple, signInWithMicrosoft, resetPassword } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
    setLoading(false);
  };

  const handleSocialLogin = async (provider) => {
    setError("");
    setLoading(true);

    try {
      switch (provider) {
        case "google":
          await signInWithGoogle();
          break;
        case "facebook":
          await signInWithFacebook();
          break;
        case "apple":
          await signInWithApple();
          break;
        case "microsoft":
          await signInWithMicrosoft();
          break;
        default:
          throw new Error("Unknown provider");
      }
      navigate("/");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
    setLoading(false);
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address first");
      return;
    }
    setError("");
    setLoading(true);

    try {
      await resetPassword(email);
      alert("Password reset email sent! Check your inbox.");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
    setLoading(false);
  };

  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/user-not-found":
        return "No account found with this email";
      case "auth/wrong-password":
        return "Incorrect password";
      case "auth/invalid-credential":
        return "Invalid email or password";
      case "auth/too-many-requests":
        return "Too many attempts. Please try again later";
      case "auth/popup-closed-by-user":
        return "Sign-in popup was closed";
      case "auth/account-exists-with-different-credential":
        return "Account exists with different sign-in method";
      default:
        return "An error occurred. Please try again";
    }
  };

  return (
    <section className="authPage">
      <div className="authContainer">
        <h1 className="authTitle">Login</h1>

        <p className="authSubtitle">
          If you are not a member, please{" "}
          <Link className="authLink" to="/signup">
            sign up here
          </Link>
        </p>

        {error && <div className="authError">{error}</div>}

        <form className="authForm" onSubmit={onSubmit}>
          <label className="authLabel" htmlFor="email">
            Email
          </label>
          <input
            className="authInput"
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="authLabel" htmlFor="password">
            Password
          </label>
          <div className="authPasswordRow">
            <input
              className="authInput authInputPassword"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="authEyeBtn"
              aria-label="Toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁"}
            </button>
          </div>

          <label className="authRemember">
            <input type="checkbox" />
            <span>Remember Me</span>
          </label>

          <button className="authPrimaryBtn" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>

          <div className="authFooterLinks">
            <a className="authLink" href="#" onClick={handleForgotPassword}>
              Forgot Password
            </a>
          </div>
        </form>

        <div className="authDivider">
          <span className="authDividerLine" />
          <span className="authDividerText">OR</span>
          <span className="authDividerLine" />
        </div>

        <div className="authSocialRow">
          <button
            type="button"
            className="socialIconBtn socialGoogle"
            onClick={() => handleSocialLogin("google")}
            aria-label="Continue with Google"
            title="Continue with Google"
            disabled={loading}
          >
            <img className="socialIconImg" src={googleIcon} alt="Google" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialFacebook"
            onClick={() => handleSocialLogin("facebook")}
            aria-label="Continue with Facebook"
            title="Continue with Facebook"
            disabled={loading}
          >
            <img className="socialIconImg" src={facebookIcon} alt="Facebook" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialMicrosoft"
            onClick={() => handleSocialLogin("microsoft")}
            aria-label="Continue with Microsoft"
            title="Continue with Microsoft"
            disabled={loading}
          >
            <img className="socialIconImg" src={microsoftIcon} alt="Microsoft" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialApple"
            onClick={() => handleSocialLogin("apple")}
            aria-label="Continue with Apple"
            title="Continue with Apple"
            disabled={loading}
          >
            <img className="socialIconImg" src={appleIcon} alt="Apple" />
          </button>
        </div>
      </div>
    </section>
  );
}
