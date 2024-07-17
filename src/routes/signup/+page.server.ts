import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import signupSchema from '$lib/schemas/signup';
import type { Actions, PageServerLoad } from './$types';
import { fail, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals: { safeGetSession } }) => {
  const { session } = await safeGetSession();

  // if the user is already logged in return them to the account page
  if (session) return redirect(303, '/');

  const form = await superValidate(zod(signupSchema));

  return { form };
};

export const actions: Actions = {
  default: async ({ request }) => {
    const form = await superValidate(request, zod(signupSchema));

    if (!form.valid) return fail(400, { form });

    return { form };
  }
};
