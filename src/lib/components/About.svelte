<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { t } from '$lib/i18n/i18n';
	import { fly } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import { THRESHOLD } from '$lib/constants/threshold';

	import assets from '$lib/assets/assets';
	import visibleContent from '$lib/stores/visibleContent.store';

	let observer: IntersectionObserver;

	onMount(() => {
		const section = document.getElementById('about');

		observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						visibleContent.update((content) => ({ ...content, about: true }));
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

<section id="about" class="flex w-full bg-slate-100 px-8 py-16 md:px-32 md:py-16">
	<img
		src={assets.WALLTREE_LOGO_SOLO}
		alt="WallTree Global"
		loading="lazy"
		class="invisible absolute opacity-10 md:visible md:right-32"
	/>
	{#if $visibleContent.about}
		<div
			class="relative ml-4 grid grid-cols-1 gap-6 md:ml-14 md:grid-cols-2"
			in:fly={{ duration: 1000, x: -100, delay: 100, easing: cubicOut }}
		>
			<div class="col-span-full flex">
				<h2 class="mb-4 text-6xl font-semibold text-slate-900">{$t('about.title')}</h2>
			</div>
			<div class="flex flex-col gap-6 place-self-end text-left">
				<p class="text-lg font-light leading-relaxed text-slate-900">{$t('about.paragraphOne')}</p>
			</div>
			<div class="flex flex-col gap-6 text-left">
				<p class="text-lg font-light leading-relaxed text-slate-900">{$t('about.paragraphTwo')}</p>
			</div>
		</div>
	{/if}
</section>
