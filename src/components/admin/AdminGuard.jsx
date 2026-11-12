"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

/**
 * Admin access, in two layers:
 *
 * 1. This guard: only a signed-in user gets past it.
 * 2. The backend: every /admin/* endpoint checks that the user behind the
 *    Firebase ID token is an admin and answers 401/403 otherwise. That is the
 *    real protection; the pages are plain static HTML anyone can load, and
 *    they show nothing until the API has returned data.
 *
 * <AdminProblem> turns those 401/403/404 answers into a message.
 */
export default function AdminGuard({ children }) {
  const { currentUser, loading } = useAuth();

  if (loading) return <AdminMessage title="Checking your access…" />;
  if (!currentUser) return <SignInPrompt />;
  return children;
}

export function AdminMessage({ title, children }) {
  return (
    <div className="adm-message" role="status">
      <h1 className="adm-messageTitle">{title}</h1>
      {children}
    </div>
  );
}

function SignInPrompt() {
  const here = typeof window === "undefined"
    ? "/admin/stories"
    : window.location.pathname + window.location.search;

  return (
    <AdminMessage title="Admin sign-in required">
      <p>Log in with your HHP admin account to review stories.</p>
      <Link href={`/login?next=${encodeURIComponent(here)}`} className="adm-button adm-button--primary">
        Log in
      </Link>
    </AdminMessage>
  );
}

export function AdminProblem({ error }) {
  const { currentUser } = useAuth();

  if (error?.status === 401) return <SignInPrompt />;

  if (error?.status === 403) {
    return (
      <AdminMessage title="No admin access">
        <p>
          You’re signed in as <strong>{currentUser?.email}</strong>, which doesn’t have
          admin access. Ask the HHP tech team to grant it, or log in with a different account.
        </p>
      </AdminMessage>
    );
  }

  if (error?.status === 404) {
    return (
      <AdminMessage title="Story not found">
        <p>It may have been removed, or the link is incomplete.</p>
        <Link href="/admin/stories" className="adm-button">Back to all stories</Link>
      </AdminMessage>
    );
  }

  return (
    <AdminMessage title="We couldn’t load this">
      <p>{error?.message || "Something went wrong. Please try again."}</p>
      <button type="button" className="adm-button" onClick={() => window.location.reload()}>
        Try again
      </button>
    </AdminMessage>
  );
}
