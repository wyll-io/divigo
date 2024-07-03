<script lang="ts">
  import { page } from '$app/stores';
  import { Bell, Users, ChevronDown, House, Search, Menu, ChevronUp } from 'lucide-svelte';
  import MobileNavbar from '$lib/components/navbar/Mobile.svelte';
  import DesktopNavbar from '$lib/components/navbar/Desktop.svelte';
  import '../app.css';
  import { cn } from '$lib/utils';
  import type { ComponentType } from 'svelte';

  const navLinks: Array<{ label: string; link: string; icon: ComponentType }> = [
    {
      label: 'Dashboard',
      icon: House,
      link: '/'
    },
    {
      label: 'Team',
      icon: Users,
      link: '/team'
    }
  ];
  const profileLinks = [
    {
      label: 'Your profile',
      link: '/'
    },
    {
      label: 'Sign out',
      link: '/logout'
    }
  ];
  const currentPage = $page.url.pathname;
  let drawerOpen = false;
  let menuOpen = false;
</script>

<div>
  <MobileNavbar links={navLinks} bind:drawerOpen />

  <!-- Desktop menu -->
  <DesktopNavbar links={navLinks} />

  <div class="lg:pl-72">
    <div
      class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8"
    >
      <button
        type="button"
        class="-m-2.5 p-2.5 text-gray-700 lg:hidden"
        on:click={() => {
          drawerOpen = true;
        }}
      >
        <span class="sr-only">Open sidebar</span>
        <Menu class="h-6 w-6" aria-hidden="true" />
      </button>

      <!-- Separator -->
      <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true"></div>

      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form class="relative flex flex-1" action="/" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <Search
            class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
            aria-hidden="true"
          />
          <input
            id="search-field"
            class="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            placeholder="Search..."
            type="search"
            name="search"
          />
        </form>
        <div class="flex items-center gap-x-4 lg:gap-x-6">
          <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
            <span class="sr-only">View notifications</span>
            <Bell class="h-6 w-6" aria-hidden="true" />
          </button>

          <!-- Separator -->
          <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true"></div>

          <!-- Profile dropdown -->
          <div class="relative">
            <button
              type="button"
              class="-m-1.5 flex items-center p-1.5"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              on:click={() => {
                menuOpen = !menuOpen;
              }}
            >
              <span class="sr-only">Open user menu</span>
              <img
                class="h-8 w-8 rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <span class="hidden lg:flex lg:items-center">
                <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">
                  John Smith
                </span>
                {#if menuOpen}
                  <ChevronUp class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                {:else}
                  <ChevronDown class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
                {/if}
              </span>
            </button>

            <div
              class={cn(
                'absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none',
                menuOpen
                  ? 'scale-100 transform opacity-100 transition duration-75 ease-in'
                  : 'scale-95 transform opacity-0 transition duration-100 ease-out'
              )}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu-button"
              tabindex="-1"
            >
              {#each profileLinks as link}
                <a
                  href={link.link}
                  class={cn(
                    'block px-3 py-1 text-sm leading-6 text-gray-900',
                    // eslint-disable-next-line no-constant-binary-expression
                    currentPage === link.link ?? 'bg-gray-50'
                  )}
                  role="menuitem"
                  tabindex="-1"
                  id="user-menu-item-0"
                >
                  {link.label}
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>

    <main class="py-10">
      <slot />
    </main>
  </div>
</div>
