<script lang="ts">
	import { WhatsappSolid } from 'flowbite-svelte-icons';
	import whatsapp from '$lib/constants/whatsapp';
</script>

<a
	href={whatsapp}
	target="_blank"
	class="fixed bottom-4 right-4 flex flex-col justify-center items-center shadow-xl p-3 rounded-full bg-primary-400 text-white hover:bg-primary-300"
>
	<WhatsappSolid size="xl" color="currentColor" />
</a>
