<script lang="ts">
  import { cn } from '$lib/utils';
  import { CircleX, LogIn, LogOut } from 'lucide-svelte';
  import { page } from '$app/stores';
  import type { ComponentType } from 'svelte';

  export let links: Array<{ label: string; icon: ComponentType; link: string }>;
  export let drawerOpen: boolean;
  export let logout: () => Promise<void>;

  const currentPage = $page.url.pathname;
</script>

<div class="relative z-50 lg:hidden" role="dialog" aria-modal="true">
  <div
    class={cn('fixed inset-0 bg-gray-900/80', drawerOpen ? 'block' : 'hidden')}
    aria-hidden="true"
  ></div>
  <div class={cn('fixed inset-0', drawerOpen ? 'flex' : 'hidden')}>
    <div class="relative mr-16 flex w-full max-w-xs flex-1">
      <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
        <button
          type="button"
          class="-m-2.5 p-2.5"
          on:click={() => {
            drawerOpen = false;
          }}
        >
          <span class="sr-only">Close sidebar</span>
          <CircleX class="h-6 w-6 text-white" aria-hidden="true" />
        </button>
      </div>

      <!-- Side bar -->
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

              {#if false}
                <div>
                  <a
                    href="/profile"
                    class={cn(
                      'nav-btn group items-center',
                      currentPage === '/profile' ? 'nav-btn-active' : 'nav-btn-default'
                    )}
                  >
                    <img
                      class="h-8 w-8 rounded-full bg-blue-700"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt="Profile"
                    />
                    <span class="sr-only">Your profile</span>
                    <span aria-hidden="true">Tim Cook</span>
                  </a>
                </div>
              {/if}
              <div>
                {#if false}
                  <button
                    class={cn(
                      'nav-btn group',
                      currentPage === '/settings' ? 'nav-btn-active' : 'nav-btn-default'
                    )}
                    on:click={logout}
                  >
                    <LogOut class="nav-btn-icon nav-btn-icon-default" aria-hidden="true" />
                    Logout
                  </button>
                {:else}
                  <a
                    href="/login"
                    class={cn(
                      'nav-btn group',
                      currentPage === '/login' ? 'nav-btn-active' : 'nav-btn-default'
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
  </div>
</div>
