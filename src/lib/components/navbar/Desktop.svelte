<script lang="ts">
  import { cn } from '$lib/utils';
  import type { ComponentType } from 'svelte';
  import { page } from '$app/stores';
  import { CircleUser, LogIn, LogOut } from 'lucide-svelte';

  export let links: Array<{ label: string; icon: ComponentType; link: string }>;

  const currentPage = $page.url.pathname;
</script>

<div class="hidden lg:inset-y-0 lg:z-50 lg:flex lg:h-full lg:w-72 lg:flex-col">
  <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-blue-600 px-6 pb-4">
    <div class="flex h-16 shrink-0 items-center">
      <img
        class="h-8 w-auto"
        src="https://tailwindui.com/img/logos/mark.svg?color=white"
        alt="Your Company"
      />
    </div>
    <nav class="flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-7">
        <li>
          <ul role="list" class="-mx-2 space-y-1">
            {#each links as link}
              <li>
                <a
                  href={link.link}
                  class={cn(
                    'nav-btn group',
                    currentPage === link.link ? 'nav-btn-active' : 'nav-btn-default'
                  )}
                >
                  <svelte:component
                    this={link.icon}
                    class={cn(
                      'nav-btn-icon',
                      currentPage === link.link ? 'nav-btn-icon-active' : 'nav-btn-icon-default'
                    )}
                    aria-hidden="true"
                  />
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </li>

        <div class="mt-auto space-y-1">
          <div class="relative mb-3">
            <div class="absolute inset-0 flex items-center" aria-hidden="true">
              <div class="w-full border-t border-gray-50 opacity-40"></div>
            </div>
          </div>

          <div>
            <a
              href="/profile"
              class={cn(
                'nav-btn group items-center',
                currentPage === '/profile' ? 'nav-btn-active' : 'nav-btn-default'
              )}
            >
              {#if false}
                <img
                  class="h-8 w-8 rounded-full bg-blue-700"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Profile"
                />
              {:else}
                <CircleUser
                  class={cn(
                    'nav-btn-icon',
                    currentPage === '/profile' ? 'nav-btn-icon-active' : 'nav-btn-icon-default'
                  )}
                  aria-hidden="true"
                />
              {/if}
              <span class="sr-only">Your profile</span>
              <span aria-hidden="true">{false ? 'Tim Cook' : 'Profile'}</span>
            </a>
          </div>
          <div>
            {#if false}
              <a
                href="/logout"
                class={cn(
                  'nav-btn group',
                  currentPage === '/settings' ? 'nav-btn-active' : 'nav-btn-default'
                )}
              >
                <LogOut class="nav-btn-icon nav-btn-icon-default" aria-hidden="true" />
                Logout
              </a>
            {:else}
              <a
                href="/login"
                class={cn(
                  'nav-btn group',
                  currentPage === '/settings' ? 'nav-btn-active' : 'nav-btn-default'
                )}
              >
                <LogIn class="nav-btn-icon nav-btn-icon-default" aria-hidden="true" />
                Login
              </a>
            {/if}
          </div>
        </div>
      </ul>
    </nav>
  </div>
</div>
