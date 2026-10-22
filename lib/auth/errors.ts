/** Maps auth/session failures to short, plain-language messages. Never exposes raw provider text. */
export type AuthErrorLike = { message?: string; status?: number; code?: string } | null | undefined;

export function friendlyAuthError(error: AuthErrorLike): string {
  if (!error) return "Something went wrong. Please try again.";
  const message = (error.message ?? "").toLowerCase();
  const code = (error.code ?? "").toLowerCase();

  if (message === "supabase_not_configured") {
    return "This app is not connected to a database yet. Ask the app owner to finish setup.";
  }
  if (code === "invalid_credentials" || message.includes("invalid login credentials")) {
    return "Email or password is incorrect.";
  }
  if (code === "email_not_confirmed" || message.includes("email not confirmed")) {
    return "Please confirm your email address first, then sign in.";
  }
  if (code === "user_already_exists" || message.includes("already registered")) {
    return "An account with this email already exists. Try signing in instead.";
  }
  if (code === "weak_password" || message.includes("password should be")) {
    return "Password is too weak. Use at least 8 characters.";
  }
  if (error.status === 429 || code.includes("rate_limit") || message.includes("rate limit")) {
    return "Too many attempts. Please wait a few minutes and try again.";
  }
  if (message.includes("jwt expired") || code === "session_expired" || code === "session_not_found") {
    return "Your session has ended. Please sign in again.";
  }
  if (message.includes("failed to fetch") || message.includes("network") || message.includes("fetch failed")) {
    return "No internet connection. Check your connection and try again.";
  }
  return "Something went wrong. Please try again.";
}
