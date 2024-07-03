<script lang="ts">
  import { cn } from '$lib/utils';
  import type { ComponentType } from 'svelte';
  import { page } from '$app/stores';
  import { Settings } from 'lucide-svelte';

  export let links: Array<{ label: string; icon: ComponentType; link: string }>;

  const currentPage = $page.url.pathname;
</script>

<div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
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
