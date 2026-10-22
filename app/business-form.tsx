"use client";

import { useActionState } from "react";
import { createBusiness, type ActionState } from "./actions";

export function BusinessForm() {
  const [state, action, pending] = useActionState<ActionState, FormData>(createBusiness, undefined);
  return (
    <form action={action}>
      <label htmlFor="name">Business name</label>
      <input id="name" name="name" type="text" required minLength={2} maxLength={100} autoComplete="organization" />
      <button type="submit" disabled={pending}>{pending ? "Creating..." : "Create business"}</button>
      {state?.error ? <p role="alert" className="error">{state.error}</p> : null}
    </form>
  );
}
