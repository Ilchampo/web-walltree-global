<script lang="ts">
	import type { IService } from '$lib/interfaces/service.interface';
	import { t } from '$lib/i18n/i18n';
	export let service: IService;
</script>

<div
	class="relative flex flex-col overflow-hidden bg-cover bg-center grayscale filter hover:grayscale-0"
	style="background-image: url('{service.image}'); height: 300px;"
>
	<div
		class="h-full w-full translate-y-[80%] transform bg-slate-900 bg-opacity-75 text-left transition-transform duration-300 ease-in-out hover:translate-y-0"
	>
		<div class="p-4">
			<h3 class="text-2xl font-semibold text-white">{$t(service.title)}</h3>
		</div>
		<div class="p-4">
			<p class="text-lg font-light leading-relaxed text-white">{$t(service.description)}</p>
		</div>
	</div>
</div>
