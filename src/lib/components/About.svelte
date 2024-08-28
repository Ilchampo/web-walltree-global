<script lang="ts">
	import assets from '$lib/assets/assets';
	import { t } from '$lib/i18n/i18n';
</script>

<section id="about" class="flex w-full bg-slate-100 px-8 py-16 md:px-32 md:py-16">
	<img
		src={assets.WALLTREE_LOGO_SOLO}
		alt="WallTree Global"
		loading="lazy"
		class="invisible absolute opacity-10 md:visible md:right-32"
	/>
	<div class="relative ml-4 grid grid-cols-1 gap-6 md:ml-14 md:grid-cols-2">
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
</section>
