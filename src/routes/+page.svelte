<script lang="ts">
	import Purpose from '$lib/components/Purpose.svelte';
	import About from '$lib/components/About.svelte';
	import Services from '$lib/components/Services.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import services from '$lib/constants/services';
</script>

<div>
	<Purpose />
	<About />
	<Services {services} />
	<Contact />
	<Footer />
</div>
