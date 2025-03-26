/* eslint-disable @typescript-eslint/no-unused-vars */
'use server';

import { createClient } from '@/lib/utils/supabase/server';
import {
  ResendParams,
  SignUpWithPasswordCredentials,
} from '@supabase/supabase-js';

export async function register(
  name: string,
  email: string,
  password: string
): Promise<{ error?: string }> {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_URL}/verify-email`,
      data: {
        name,
      },
    },
  } as SignUpWithPasswordCredentials);

  if (error) {
    return { error: error.message };
  }

  return {};
}

export async function resendEmail(email: string) {
  const supabase = await createClient();

  const { error } = await supabase.auth.resend({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_URL}/verify-email`,
    },
  } as ResendParams);

  if (error) {
    return { error: error.message };
  }

  return {};
}

export async function verifyEmail(token: string, tokenHash: string) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.verifyOtp({
    token,
    token_hash: tokenHash,
    type: 'signup',
  });

  if (error) {
    return { error: error.message };
  }

  return {};
}
