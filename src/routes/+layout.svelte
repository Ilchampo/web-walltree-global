<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import Landing from '$lib/components/Landing.svelte';
	import translations from '$lib/i18n/translations';
	import navigation from '$lib/constants/navigation';
</script>

<svelte:head>
	<title>WallTree Global | Ecuador</title>
	<meta name="description" content={translations.es['meta.description']} />
</svelte:head>

<Navbar {navigation} />
<div class="flex h-screen w-screen flex-col">
	<Landing />
</div>
<main>
	<slot />
</main>
