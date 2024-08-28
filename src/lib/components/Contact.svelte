<script lang="ts">
	import { PhoneSolid, EnvelopeSolid, MapPinAltSolid } from 'flowbite-svelte-icons';
	import GoogleMaps from '$lib/components/GoogleMaps.svelte';

	import { t } from '$lib/i18n/i18n';
</script>

<section id="contact" class="flex w-full items-center bg-slate-900 px-8 py-16 md:px-32 md:py-16">
	<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
		<div class="flex flex-col items-start justify-start gap-2">
			<div class="flex flex-col gap-6 text-left">
				<h2 class="mb-4 text-6xl font-semibold text-white">{$t('contact.title')}</h2>
				<p class="text-lg font-light leading-relaxed text-white">{$t('contact.description')}</p>
			</div>
			<div class="flex flex-col gap-2 font-light text-primary-200">
				<span class="flex items-center gap-2 text-xl font-semibold text-primary-500"
					><MapPinAltSolid color="currentColor" size="lg" />
					{$t('contact.address.title')}</span
				>
				<span class="ml-8">{$t('contact.address.value')}</span>
			</div>
			<div class="flex flex-col gap-2 font-light text-primary-200">
				<span class="flex items-center gap-2 text-xl font-semibold text-primary-500"
					><PhoneSolid color="currentColor" size="lg" />
					{$t('contact.phone.title')}</span
				>
				<a class="ml-8" href="tel:{$t('contact.phone.value')}">{$t('contact.phone.value')}</a>
			</div>
			<div class="flex flex-col gap-2 font-light text-primary-200">
				<span class="flex items-center gap-2 text-xl font-semibold text-primary-500"
					><EnvelopeSolid color="currentColor" size="lg" />
					{$t('contact.email.title')}</span
				>
				<a class="ml-8" href="mailto:{$t('contact.email.email')}">{$t('contact.email.email')}</a>
			</div>
		</div>
		<GoogleMaps width={650} height={400} />
	</div>
</section>
