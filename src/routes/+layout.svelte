<script>
	import '../app.css';

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import Loader from '$lib/components/Loader.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from '$lib/components/Landing.svelte';
	import WhatsApp from '$lib/components/WhatsApp.svelte';

	import translations from '$lib/i18n/translations';
	import navigation from '$lib/constants/navigation';

	let isLoading = true;

	onMount(() => {
		setTimeout(() => {
			isLoading = false;
		}, 3000);
	});
</script>

<svelte:head>
	<title>WallTree Global | Ecuador</title>
	<meta name="description" content={translations.es['meta.description']} />
</svelte:head>

{#if isLoading}
	<Loader />
{:else}
	<div in:fade={{ duration: 1000, delay: 0, easing: cubicOut }}>
		<Navbar {navigation} />
		<div class="flex h-screen w-screen flex-col">
			<Landing />
		</div>
		<main>
			<slot />
		</main>
		<WhatsApp />
	</div>
{/if}
