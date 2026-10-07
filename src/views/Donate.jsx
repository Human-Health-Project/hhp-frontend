"use client";

import { useCallback, useState } from "react";
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const SQA_STRIPE_PUBLISHABLE_KEY = "pk_test_fevzfNn2jqEIOLgGg5jY5VQC";
const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || SQA_STRIPE_PUBLISHABLE_KEY;
const stripePromise = key ? loadStripe(key) : null;
const apiUrl = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/$/, "");

export default function DonatePage() {
  const [amount, setAmount] = useState("25");
  const [frequency, setFrequency] = useState("one_time");
  const [checkoutDonation, setCheckoutDonation] = useState(null);
  const [error, setError] = useState("");

  const fetchClientSecret = useCallback(async () => {
    const response = await fetch(`${apiUrl}/donations/checkout-session`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(checkoutDonation),
    });
    const payload = await response.json();
    if (!response.ok || !payload.client_secret) throw new Error(payload.message || "Unable to start secure checkout.");
    return payload.client_secret;
  }, [checkoutDonation]);

  function startCheckout(event) {
    event.preventDefault();
    const cents = Math.round(Number(amount) * 100);
    if (!Number.isFinite(cents) || cents < 100 || cents > 1000000) {
      setError("Enter a donation between $1 and $10,000.");
      return;
    }
    setError("");
    setCheckoutDonation({ amount: cents, frequency });
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
        {!checkoutDonation && <form onSubmit={startCheckout} className="space-y-4">
          <fieldset>
            <legend className="mb-2 block text-base font-bold text-gray-900">Donation frequency</legend>
            <div className="grid grid-cols-2 gap-2 rounded-xl bg-gray-100 p-1" role="radiogroup">
              {[
                { value: "one_time", label: "One-time" },
                { value: "monthly", label: "Monthly" },
              ].map(option => <label key={option.value} className={`cursor-pointer rounded-lg px-4 py-3 text-center font-semibold transition-colors ${frequency === option.value ? "bg-[#135E96] text-white shadow-sm" : "text-gray-700 hover:bg-white"}`}>
                <input type="radio" name="donation-frequency" value={option.value} checked={frequency === option.value} onChange={event => setFrequency(event.target.value)} className="sr-only" />
                {option.label}
              </label>)}
            </div>
          </fieldset>
          <div className="rounded-xl border-2 border-[#135E96] bg-blue-50 p-4 sm:p-5">
            <label htmlFor="donation-amount" className="block text-lg font-bold text-gray-900">Enter your donation amount</label>
            <p id="donation-amount-help" className="mt-1 text-sm text-gray-600">Choose an amount below or type your own amount in US dollars{frequency === "monthly" ? " per month" : ""}.</p>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[10, 25, 50, 100].map(value => <button key={value} type="button" onClick={() => setAmount(String(value))} className={`rounded-lg border px-2 py-2 font-semibold ${amount === String(value) ? "border-[#135E96] bg-[#135E96] text-white" : "border-gray-300 bg-white text-[#135E96] hover:border-[#135E96]"}`}>${value}</button>)}
            </div>
            <div className="mt-4 flex overflow-hidden rounded-lg border-2 border-gray-400 bg-white focus-within:border-[#135E96] focus-within:ring-2 focus-within:ring-blue-200">
              <span className="flex items-center border-r border-gray-300 bg-gray-100 px-4 text-xl font-bold text-gray-800">$</span>
              <input id="donation-amount" aria-describedby="donation-amount-help" aria-label="Custom donation amount in US dollars" type="number" min="1" max="10000" step="0.01" value={amount} onChange={event => setAmount(event.target.value)} className="min-w-0 flex-1 px-4 py-3 text-xl font-bold text-gray-900 outline-none" required />
              <span className="flex items-center px-4 font-semibold text-gray-600">USD{frequency === "monthly" ? "/mo" : ""}</span>
            </div>
            <p className="mt-2 text-xs text-gray-500">Minimum $1 · Maximum $10,000</p>
          </div>
          {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
          <button type="submit" disabled={!stripePromise || !apiUrl} className="w-full rounded-lg bg-[#135E96] px-6 py-3 font-semibold text-white hover:bg-[#0f4d7c] disabled:cursor-not-allowed disabled:opacity-60">Continue to secure checkout</button>
          {(!stripePromise || !apiUrl) && <p role="status" className="text-sm text-gray-600">Embedded donations are being configured. Please check back shortly.</p>}
        </form>}
        {checkoutDonation && stripePromise && <div><button type="button" onClick={() => setCheckoutDonation(null)} className="mb-4 text-sm font-semibold text-[#135E96] hover:underline">← Change amount or frequency</button><EmbeddedCheckoutProvider stripe={stripePromise} options={{ fetchClientSecret }}><EmbeddedCheckout /></EmbeddedCheckoutProvider></div>}
      </div>
    </section>
  </div>;
}
