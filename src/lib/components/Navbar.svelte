<script lang="ts">
	import type { INavigation } from '$lib/interfaces/navigation.interface';

	import { Navbar, NavBrand, NavHamburger, NavUl } from 'flowbite-svelte';
	import { t } from '$lib/i18n/i18n';

	import assets from '$lib/assets/assets';

	export let navigation: INavigation[];
</script>

<Navbar class="fixed start-0 top-0 z-20 w-full border-b px-2 py-2.5 sm:px-4" id="navbar">
	<NavBrand href="/">
		<img src={assets.WALLTREE_LOGO_SOLO} class="me-3 h-6 sm:h-9" alt="WallTree Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
			><span class="text-primary-500">WallTree</span>
			<span class="text-primary-700">Global</span> | Ecuador</span
		>
	</NavBrand>
	<NavHamburger />
	<NavUl>
		{#each navigation as item}
			<button on:click={item.onClick}>{$t(item.name)}</button>
		{/each}
	</NavUl>
</Navbar>
