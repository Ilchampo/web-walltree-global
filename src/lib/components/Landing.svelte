<script lang="ts">
	import { onMount } from 'svelte';
	import { Button } from 'flowbite-svelte';
	import { t } from '$lib/i18n/i18n';
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	import visibleContent from '$lib/stores/visibleContent.store';
	import smoothScroll from '$lib/utils/smoothScroll';
	import assets from '$lib/assets/assets';

	onMount(() => {
		visibleContent.update((content) => {
			return { ...content, home: true };
		});
	});
</script>

<section id="home" class="flex h-full w-full bg-cover" style="background-image: url({assets.JUMBOTRON_BACKGROUND});">
	<div class="grid w-full grid-cols-1 md:grid-cols-2">
		<div class="flex h-full w-full flex-col items-center justify-center bg-slate-900 bg-opacity-80 p-4 text-center">
			{#if $visibleContent.home}
				<div
					class="flex flex-col gap-8 justify-center items-center"
					in:fade={{ duration: 1000, delay: 500, easing: cubicOut }}
				>
					<div class="flex flex-col items-center justify-center gap-2">
						<div
							class="flex h-72 w-72 flex-col items-center justify-center rounded-full border-[8px] border-white p-4"
						>
							<img
								src={assets.WALLTREE_LOGO_SOLO}
								alt="WallTree Global"
								class="w-56 brightness-0 invert filter"
							/>
						</div>
						<h1 class="text-6xl font-bold text-white">{$t('home.company')}</h1>
					</div>
					<span class="text-4xl font-extralight text-white">{$t('home.slogan')}</span>
					<Button pill={true} class="w-64" on:click={() => smoothScroll('services')}>{$t('home.more')}</Button
					>
				</div>
			{/if}
		</div>
		<div class="relative hidden h-full w-full flex-col opacity-80 md:flex">
			<svg class="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
				<polygon points="0,0 10,0 10,0 0,100" class="fill-slate-900 text-transparent"></polygon>
			</svg>
		</div>
	</div>
</section>
