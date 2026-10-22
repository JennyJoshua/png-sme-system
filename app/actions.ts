"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { friendlyAuthError } from "@/lib/auth/errors";

export type ActionState = { error?: string } | undefined;

export async function createBusiness(_prev: ActionState, formData: FormData): Promise<ActionState> {
  const name = String(formData.get("name") ?? "").trim();
  if (name.length < 2 || name.length > 100) {
    return { error: "Business name must be between 2 and 100 characters." };
  }
  const supabase = await createClient();
  if (!supabase) return { error: friendlyAuthError({ message: "SUPABASE_NOT_CONFIGURED" }) };

  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError || !userData.user) return { error: "Your session has ended. Please sign in again." };

  const { error } = await supabase.rpc("create_business", { p_name: name });
  if (error) return { error: "Could not create the business. Please try again." };

  revalidatePath("/");
  return undefined;
}

export async function signOut() {
  const supabase = await createClient();
  if (supabase) await supabase.auth.signOut();
  redirect("/login");
}
