<script lang="ts">
  import { cn } from '$lib/utils';
  import { CircleX, Settings } from 'lucide-svelte';
  import { page } from '$app/stores';
  import type { ComponentType } from 'svelte';

  export let links: Array<{ label: string; icon: ComponentType; link: string }>;
  export let drawerOpen: boolean;

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
      <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-4">
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
            <li class="mt-auto">
              <a
                href="/settings"
                class={cn(
                  'nav-btn group',
                  currentPage === '/settings' ? 'nav-btn-active' : 'nav-btn-default'
                )}
              >
                <Settings
                  class={cn(
                    'nav-btn-icon group',
                    currentPage === '/settings' ? 'nav-btn-icon-active' : 'nav-btn-icon-default'
                  )}
                  aria-hidden="true"
                />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
