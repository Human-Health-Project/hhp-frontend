import React from "react";
import { stripeDonationUrl, stripeDonationsEnabled } from "../config/donations";

export default function DonatePage() {
  return (
    <div className="min-h-screen mb-20">
      {/* Hero Section */}
      <section
        className="bg-[#135E96] py-16 sm:py-20 flex flex-col items-center justify-center px-4"
      >
        <div className="text-center max-w-4xl">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Support Our Cause
          </h1>
          <p
            className="text-base sm:text-lg md:text-lg"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Help our organization by donating today! All donations go directly
            to making a difference for our cause.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-6xl mx-auto -mt-12 sm:-mt-16 px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Info Panel */}
        <div className="bg-white rounded-2xl shadow-lg flex flex-col justify-start p-6 sm:p-8 md:p-10 space-y-4 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">
            Join Our Campaign
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Your contribution helps us educate, support, and improve the lives
            of people impacted by our mission.
          </p>
          <ul className="space-y-2 sm:space-y-3">
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-3 bg-[#135E96]"></span>
              Awareness Programs
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-3 bg-[#135E96]"></span>
              Community Support
            </li>
            <li className="flex items-center">
              <span className="w-3 h-3 rounded-full mr-3 bg-[#135E96]"></span>
              Preventive Research
            </li>
          </ul>
        </div>

        {/* Right Donation Options */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 md:p-10">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Donate securely</h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">Complete your donation through Human Health Project&apos;s secure Stripe checkout.</p>
          {stripeDonationsEnabled ? (
            <a href={stripeDonationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center rounded-lg bg-[#135E96] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#0f4d7c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#135E96]">
              Donate with Stripe<span className="sr-only"> (opens secure checkout in a new tab)</span>
            </a>
          ) : (
            <div className="rounded-xl border border-[#135E96]/25 bg-[#135E96]/5 p-5" role="status">
              <p className="font-semibold text-gray-800">Online donations are being updated.</p>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">Please check back shortly or contact donations@humanhealthproject.org.</p>
            </div>
          )}
          <p className="mt-4 text-xs leading-relaxed text-gray-500">You will only see a donation confirmation after Stripe confirms the payment.</p>
        </div>
      </section>
    </div>
  );
}
