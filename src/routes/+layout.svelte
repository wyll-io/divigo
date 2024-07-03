<script lang="ts">
  import { Users, House, Menu } from 'lucide-svelte';
  import MobileNavbar from '$lib/components/navbar/Mobile.svelte';
  import DesktopNavbar from '$lib/components/navbar/Desktop.svelte';
  import '../app.css';
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
  let drawerOpen = false;
</script>

<div class="flex h-full flex-col md:flex-row">
  <MobileNavbar links={navLinks} bind:drawerOpen />

  <!-- Desktop menu -->
  <DesktopNavbar links={navLinks} />

  <div
    class="sticky top-0 z-40 flex h-16 w-full shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm md:hidden"
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
  </div>

  <main class="flex h-full grow items-center justify-center">
    <slot />
  </main>
</div>
