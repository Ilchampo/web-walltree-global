<script lang="ts">
	import type { IService } from '$lib/interfaces/service.interface';

	import { t } from '$lib/i18n/i18n';

	import ServiceCard from '$lib/components/ServiceCard.svelte';

	export let services: IService[] = [];
</script>

<section id="services" class="bg-services flex w-full flex-col items-center gap-8 px-8 py-16 md:px-32 md:py-16">
	<div class="flex flex-col gap-6 text-left">
		<h2 class="mb-4 text-6xl font-semibold text-white">{$t('services.title')}</h2>
		<p class="text-lg font-light leading-relaxed text-white">{$t('services.description')}</p>
	</div>

	<div class="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
		{#each services as service}
			<ServiceCard {service} />
		{/each}
	</div>
</section>

<style>
	.bg-services {
		background-image: linear-gradient(to right, #4a9d52 50%, #35723b 50%);
		background-size: 100% 100%;
	}
</style>
