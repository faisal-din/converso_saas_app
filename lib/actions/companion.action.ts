'use server';

import { auth } from '@clerk/nextjs/server';
import { createSupabaseClient } from '../supabase';

export const createCompanionAction = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();

  const supabase = createSupabaseClient();

  const { data, error } = await supabase
    .from('companions')
    .insert({
      ...formData,
      author,
    })
    .select();

  if (error || !data) {
    console.error('Error creating companion:', error);
    throw new Error(error.message || 'Failed to create companion');
  }

  return data[0];
};
