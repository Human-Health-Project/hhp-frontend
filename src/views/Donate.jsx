"use client";

import { useCallback, useState } from "react";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const stripePromise = key ? loadStripe(key) : null;
const apiUrl = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");

export default function DonatePage() {
  const [amount, setAmount] = useState("25");
  const [checkoutAmount, setCheckoutAmount] = useState(null);
  const [error, setError] = useState("");

  const fetchClientSecret = useCallback(async () => {
    const response = await fetch(`${apiUrl}/donations/checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ amount: checkoutAmount }),
    });
    const payload = await response.json();
    if (!response.ok || !payload.client_secret) throw new Error(payload.message || "Unable to start secure checkout.");
    return payload.client_secret;
  }, [checkoutAmount]);

  function startCheckout(event) {
    event.preventDefault();
    const cents = Math.round(Number(amount) * 100);
    if (!Number.isFinite(cents) || cents < 100 || cents > 1000000) {
      setError("Enter a donation between $1 and $10,000.");
      return;
    }
    setError("");
    setCheckoutAmount(cents);
  }

  return <div className="min-h-screen mb-20">
    <section className="bg-[#135E96] py-16 sm:py-20 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-4xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "rgba(255,255,255,0.9)" }}>Support Our Cause</h1>
        <p className="text-base sm:text-lg" style={{ color: "rgba(255,255,255,0.9)" }}>Help our organization by donating today! All donations go directly to making a difference for our cause.</p>
      </div>
    </section>
    <section className="max-w-6xl mx-auto -mt-12 sm:-mt-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10 space-y-4">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Join Our Campaign</h2>
        <p className="text-gray-600 leading-relaxed">Your contribution helps us educate, support, and improve the lives of people impacted by our mission.</p>
        <ul className="space-y-3">{["Awareness Programs", "Community Support", "Preventive Research"].map(item => <li className="flex items-center" key={item}><span className="w-3 h-3 rounded-full mr-3 bg-[#135E96]" />{item}</li>)}</ul>
      </div>
      <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Donate securely</h2>
        {!checkoutAmount && <form onSubmit={startCheckout} className="space-y-4">
          <label htmlFor="donation-amount" className="block font-semibold text-gray-800">Donation amount (USD)</label>
          <div className="flex rounded-lg border border-gray-300 focus-within:ring-2 focus-within:ring-[#135E96]"><span className="px-4 py-3 text-gray-600">$</span><input id="donation-amount" type="number" min="1" max="10000" step="0.01" value={amount} onChange={event => setAmount(event.target.value)} className="min-w-0 flex-1 rounded-r-lg px-3 py-3 outline-none" required /></div>
          {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
          <button type="submit" disabled={!stripePromise || !apiUrl} className="w-full rounded-lg bg-[#135E96] px-6 py-3 font-semibold text-white hover:bg-[#0f4d7c] disabled:cursor-not-allowed disabled:opacity-60">Continue to secure checkout</button>
          {(!stripePromise || !apiUrl) && <p role="status" className="text-sm text-gray-600">Embedded donations are being configured. Please check back shortly.</p>}
        </form>}
        {checkoutAmount && stripePromise && <div><button type="button" onClick={() => setCheckoutAmount(null)} className="mb-4 text-sm font-semibold text-[#135E96] hover:underline">← Change amount</button><EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}><EmbeddedCheckout /></EmbeddedCheckoutProvider></div>}
      </div>
    </section>
  </div>;
}
