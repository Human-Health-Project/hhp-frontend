const STRIPE_HOSTS = new Set(["buy.stripe.com", "donate.stripe.com", "checkout.stripe.com"]);

function approvedStripeUrl(value) {
  if (!value) return null;
  try {
    const url = new URL(value);
    return url.protocol === "https:" && STRIPE_HOSTS.has(url.hostname) ? url.toString() : null;
  } catch {
    return null;
  }
}

export const stripeDonationUrl = approvedStripeUrl(import.meta.env.VITE_STRIPE_DONATION_URL);
export const stripeDonationsEnabled = Boolean(stripeDonationUrl);
