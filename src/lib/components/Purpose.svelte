<script lang="ts">
	import { t } from '$lib/i18n/i18n';
</script>

<section id="purpose" class="flex w-full items-center bg-slate-900 px-8 py-16 md:px-32 md:py-16">
	<div class="z-10 grid grid-cols-1 gap-6 md:grid-cols-2">
		<div class="flex flex-col gap-6 text-left">
			<h2 class="mb-4 w-64 text-6xl font-semibold text-white">{$t('purpose.title')}</h2>
			<p class="text-lg font-light leading-relaxed text-white">{$t('purpose.paragraphOne')}</p>
		</div>
		<div class="flex flex-col gap-6 text-left">
			<p class="text-lg font-light leading-relaxed text-white">{$t('purpose.paragraphTwo')}</p>
			<p class="text-lg font-light leading-relaxed text-white">{$t('purpose.paragraphThree')}</p>
		</div>
	</div>
</section>
