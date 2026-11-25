import Link from "next/link";
import "./JoinUsCta.css";

// "Join Us" call to action. Shared by the Home, Meet the Team and Who We Serve
// pages so the content, font and button colour stay identical everywhere.
export default function JoinUsCta() {
  return (
    <section className="join-us-cta" aria-label="Join Human Health Project">
      <p className="join-us-cta__tagline">
        Empower others to change their lives and change your own in the process
      </p>
      <div className="join-us-cta__box">
        <p className="join-us-cta__text">
          Our project is growing and we want you to be a part of it.
          <br />
          More People. More Information. Better Health.
        </p>
        <Link href="/signup" className="join-us-cta__button">
          Join Us
        </Link>
      </div>
    </section>
  );
}
