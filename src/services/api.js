const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ||
  "https://hhp-backend-production-l2iqny.laravel.cloud/api"
).replace(/\/$/, "");

export class ApiError extends Error {
  constructor(message, status, errors = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.errors = errors;
  }
}

async function request(path, { token, ...options } = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new ApiError(
      payload.message || "Request failed. Please try again.",
      response.status,
      payload.errors,
    );
  }

  return payload;
}

export const api = {
  establishSession: (token) => request("/auth/session", { method: "POST", token }),
  signUpForHealthcareAccess: (data) => request("/healthcare-access-user", {
    method: "POST",
    body: JSON.stringify(data),
  }),
  logout: (token) => request("/auth/logout", { method: "POST", token }),
  contact: (data) => request("/contact", { method: "POST", body: JSON.stringify(data) }),
  subscribeToNewsletter: (data) => request("/newsletter-subscriber", {
    method: "POST",
    body: JSON.stringify(data),
  }),
  applyForInternship: (data) => request("/intern-with-us", {
    method: "POST",
    body: JSON.stringify(data),
  }),
  applyToVolunteer: (data) => request("/volunteer-with-us", {
    method: "POST",
    body: JSON.stringify(data),
  }),
};
