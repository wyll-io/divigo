<script lang="ts">
  import { PUBLIC_ORIGIN } from '$env/static/public';
  import { CircleAlert } from 'lucide-svelte';
  import { cn } from '$lib/utils.js';
  import { superForm } from 'sveltekit-superforms';
  import { zod } from 'sveltekit-superforms/adapters';
  import signupSchema from '$lib/schemas/signup';

  export let data;

  const { supabase } = data;
  const { form, errors, enhance } = superForm(data.form, {
    validators: zod(signupSchema)
  });
</script>

<div class="flex min-h-full w-full flex-col justify-center py-12 sm:px-6 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <img
      class="mx-auto h-10 w-auto"
      src="https://tailwindui.com/img/logos/mark.svg?color=blue&shade=600"
      alt="Divigo"
    />
    <h2 class="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Create an account
    </h2>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
    <div class="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <form class="space-y-6" method="POST" use:enhance>
        <div class="flex flex-row gap-x-6">
          <div>
            <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900">
              Firstname
            </label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                id="firstname"
                name="firstname"
                type="text"
                autocomplete="given-name"
                class={cn(
                  'block w-full rounded-md border-0 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
                  $errors.firstname
                    ? 'pr-10 text-red-900 ring-red-300 focus:ring-red-500'
                    : 'text-gray-900 ring-gray-300 focus:ring-blue-600 '
                )}
                bind:value={$form.firstname}
                aria-invalid={$errors.firstname ? 'true' : 'false'}
                aria-errormessage={$errors.firstname?.join(', ')}
              />
              {#if $errors.firstname}
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <CircleAlert class="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
              {/if}
            </div>
            {#if $errors.firstname}
              <p class="mt-2 text-sm text-red-600" id="email-error">{$errors.firstname}</p>
            {/if}
          </div>
          <div>
            <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900">
              Lastname
            </label>
            <div class="relative mt-2 rounded-md shadow-sm">
              <input
                id="lastname"
                name="lastname"
                type="text"
                autocomplete="family-name"
                class={cn(
                  'block w-full rounded-md border-0 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
                  $errors.lastname
                    ? 'pr-10 text-red-900 ring-red-300 focus:ring-red-500'
                    : 'text-gray-900 ring-gray-300 focus:ring-blue-600 '
                )}
                bind:value={$form.lastname}
                aria-invalid={$errors.lastname ? 'true' : 'false'}
                aria-errormessage={$errors.lastname?.join(', ')}
              />
              {#if $errors.lastname}
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <CircleAlert class="h-5 w-5 text-red-500" aria-hidden="true" />
                </div>
              {/if}
            </div>
            {#if $errors.lastname}
              <p class="mt-2 text-sm text-red-600" id="email-error">{$errors.lastname}</p>
            {/if}
          </div>
        </div>
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
            E-mail
          </label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              id="email"
              name="email"
              type="email"
              autocomplete="email"
              class={cn(
                'block w-full rounded-md border-0 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
                $errors.email
                  ? 'pr-10 text-red-900 ring-red-300 focus:ring-red-500'
                  : 'text-gray-900 ring-gray-300 focus:ring-blue-600 '
              )}
              bind:value={$form.email}
              aria-invalid={$errors.email ? 'true' : 'false'}
              aria-errormessage={$errors.email?.join(', ')}
            />
            {#if $errors.email}
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <CircleAlert class="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
            {/if}
          </div>
          {#if $errors.email}
            <p class="mt-2 text-sm text-red-600" id="email-error">{$errors.email}</p>
          {/if}
        </div>

        <div>
          <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div class="relative mt-2 rounded-md shadow-sm">
            <input
              id="password"
              name="password"
              type="password"
              autocomplete="current-password"
              class={cn(
                'block w-full rounded-md border-0 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
                $errors.password
                  ? 'pr-10 text-red-900 ring-red-300 focus:ring-red-500'
                  : 'text-gray-900 ring-gray-300 focus:ring-blue-600 '
              )}
              bind:value={$form.password}
              aria-invalid={$errors.password ? 'true' : 'false'}
              aria-errormessage={$errors.password?.join(', ')}
            />
            {#if $errors.password}
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <CircleAlert class="h-5 w-5 text-red-500" aria-hidden="true" />
              </div>
            {/if}
          </div>
          {#if $errors.password}
            <p class="mt-2 text-sm text-red-600" id="email-error">{$errors.password}</p>
          {/if}
        </div>

        <div>
          <button
            type="submit"
            class="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Register
          </button>
        </div>
      </form>

      <div class="relative mt-10">
        <div class="absolute inset-0 flex items-center" aria-hidden="true">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-center text-sm font-medium leading-6">
          <span class="bg-white px-6 text-gray-900">Or continue with</span>
        </div>
      </div>

      <div class="mt-6 flex flex-row items-center justify-center">
        <button
          class="flex w-fit items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
          on:click={async () => {
            await supabase.auth.signInWithOAuth({
              provider: 'google',
              options: {
                redirectTo: `${PUBLIC_ORIGIN}/api/auth/callbacks/google`
              }
            });
          }}
        >
          <img class="h-5 w-5" src="/google.svg" alt="Google" />
          <span class="text-sm font-semibold leading-6">Google</span>
        </button>
      </div>
    </div>
  </div>
</div>
