import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { updateProfile } from "firebase/auth";
import "./Signup.css";

import googleIcon from "../assets/social/google.svg";
import facebookIcon from "../assets/social/facebook.svg";
import appleIcon from "../assets/social/apple.svg";
import microsoftIcon from "../assets/social/microsoft.svg";

export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { signup, signInWithGoogle, signInWithFacebook, signInWithApple, signInWithMicrosoft } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.firstName || !formData.lastName) {
      setError("Please enter your first and last name");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      const { user } = await signup(formData.email, formData.password);

      // Update user profile with display name
      await updateProfile(user, {
        displayName: `${formData.firstName} ${formData.lastName}`,
      });

      navigate("/");
    } catch (err) {
      setError(getErrorMessage(err.code));
    }
    setLoading(false);
  };

  const handleSocialSignup = async (provider) => {
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

  const getErrorMessage = (code) => {
    switch (code) {
      case "auth/email-already-in-use":
        return "An account with this email already exists";
      case "auth/invalid-email":
        return "Invalid email address";
      case "auth/weak-password":
        return "Password is too weak. Use at least 6 characters";
      case "auth/popup-closed-by-user":
        return "Sign-up popup was closed";
      case "auth/account-exists-with-different-credential":
        return "Account exists with different sign-in method";
      default:
        return "An error occurred. Please try again";
    }
  };

  return (
    <section className="authPage">
      <div className="authContainer">
        <h1 className="authTitle">Sign up</h1>

        <p className="authSubtitle">
          Join the HHP movement today. If you are already a member, please{" "}
          <Link className="authLink" to="/login">
            log in here
          </Link>
        </p>

        {error && <div className="authError">{error}</div>}

        <form className="authForm" onSubmit={onSubmit}>
          <label className="authLabel" htmlFor="firstName">
            First Name:*
          </label>
          <input
            className="authInput"
            id="firstName"
            name="firstName"
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            required
          />

          <label className="authLabel" htmlFor="lastName">
            Last Name:*
          </label>
          <input
            className="authInput"
            id="lastName"
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            required
          />

          <label className="authLabel" htmlFor="email">
            Email:*
          </label>
          <input
            className="authInput"
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label className="authLabel" htmlFor="password">
            Password:*
          </label>
          <div className="authPasswordRow">
            <input
              className="authInput authInputPassword"
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              value={formData.password}
              onChange={handleChange}
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

          <label className="authLabel" htmlFor="confirmPassword">
            Password Confirmation:*
          </label>
          <div className="authPasswordRow">
            <input
              className="authInput authInputPassword"
              id="confirmPassword"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="authEyeBtn"
              aria-label="Toggle confirm password visibility"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? "🙈" : "👁"}
            </button>
          </div>

          <label className="authNewsletter">
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            <span>
              Subscribe to our Newsletter and keep updated on our Learning Academy courses, Patient Advocacy
              Workshops, Shared Patient Information and Online Events.
            </span>
          </label>

          <button className="authPrimaryBtn" type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Join Us"}
          </button>
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
            onClick={() => handleSocialSignup("google")}
            aria-label="Sign up with Google"
            title="Sign up with Google"
            disabled={loading}
          >
            <img className="socialIconImg" src={googleIcon} alt="Google" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialFacebook"
            onClick={() => handleSocialSignup("facebook")}
            aria-label="Sign up with Facebook"
            title="Sign up with Facebook"
            disabled={loading}
          >
            <img className="socialIconImg" src={facebookIcon} alt="Facebook" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialMicrosoft"
            onClick={() => handleSocialSignup("microsoft")}
            aria-label="Sign up with Microsoft"
            title="Sign up with Microsoft"
            disabled={loading}
          >
            <img className="socialIconImg" src={microsoftIcon} alt="Microsoft" />
          </button>

          <button
            type="button"
            className="socialIconBtn socialApple"
            onClick={() => handleSocialSignup("apple")}
            aria-label="Sign up with Apple"
            title="Sign up with Apple"
            disabled={loading}
          >
            <img className="socialIconImg" src={appleIcon} alt="Apple" />
          </button>
        </div>
      </div>
    </section>
  );
}
