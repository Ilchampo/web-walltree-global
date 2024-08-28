<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { t } from '$lib/i18n/i18n';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { THRESHOLD } from '$lib/constants/threshold';

	import visibleContent from '$lib/stores/visibleContent.store';

	let observer: IntersectionObserver;

	onMount(() => {
		const section = document.getElementById('purpose');

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleContent.update((content) => ({ ...content, purpose: true }));
					}
				});
			},
			{ threshold: THRESHOLD }
		);

		if (section) {
			observer.observe(section);
		}
	});

	onDestroy(() => {
		if (observer) {
			observer.disconnect();
		}
	});
</script>

<section id="purpose" class="flex w-full items-center bg-slate-900 px-8 py-16 md:px-32 md:py-16">
	{#if $visibleContent.purpose}
		<div
			class="z-10 grid grid-cols-1 gap-6 md:grid-cols-2"
			in:fly={{ duration: 1000, x: 100, delay: 100, easing: cubicOut }}
		>
			<div class="flex flex-col gap-6 text-left">
				<h2 class="mb-4 w-64 text-6xl font-semibold text-white">{$t('purpose.title')}</h2>
				<p class="text-lg font-light leading-relaxed text-white">{$t('purpose.paragraphOne')}</p>
			</div>
			<div class="flex flex-col gap-6 text-left">
				<p class="text-lg font-light leading-relaxed text-white">{$t('purpose.paragraphTwo')}</p>
				<p class="text-lg font-light leading-relaxed text-white">{$t('purpose.paragraphThree')}</p>
			</div>
		</div>
	{/if}
</section>
