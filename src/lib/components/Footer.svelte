<script lang="ts">
	import { t } from '$lib/i18n/i18n';
</script>

<div
	class="flex w-full flex-col items-center justify-center gap-2 bg-slate-950 p-4 text-xs font-extralight text-slate-200 md:flex-row md:gap-8"
>
	<span>{$t('footer.rights')}</span>
	<span class="hidden font-extrabold md:flex">|</span>
	<span
		>{$t('footer.developedBy')}
		<a href="https://ilchampo.github.io/" target="_blank" class="font-semibold text-primary-500"
			>Pablo Beltran</a
		>
	</span>
</div>
