const STRIPE_HOSTS = new Set([
  "buy.stripe.com",
  "donate.stripe.com",
  "checkout.stripe.com",
]);

function approvedStripeUrl(value) {
  if (!value) return null;

  try {
    const url = new URL(value);
    return url.protocol === "https:" && STRIPE_HOSTS.has(url.hostname)
      ? url.toString()
      : null;
  } catch {
    return null;
  }
}

const SQA_STRIPE_DONATION_URL = "https://buy.stripe.com/test_8x200jgJu9J4cgY7s71RC00";

export const stripeDonationUrl = approvedStripeUrl(
  process.env.NEXT_PUBLIC_STRIPE_DONATION_URL || SQA_STRIPE_DONATION_URL,
);

export const stripeDonationsEnabled = Boolean(stripeDonationUrl);
