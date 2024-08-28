<script lang="ts">
	export let width = 500;
	export let height = 500;
</script>

<div
	style="text-decoration:none; overflow:hidden;max-width:100%;width:{width}px;height:{height}px;"
>
	<div class="canvas-for-googlemap" style="height:100%; width:100%;max-width:100%;">
		<iframe
			title="Google Maps"
			style="height:100%;width:100%;border:0;"
			frameborder="0"
			src="https://www.google.com/maps/embed/v1/place?q=Quicentro&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
		></iframe>
	</div>
</div>

<style>
	.canvas-for-googlemap {
		max-height: none;
		max-width: none !important;
		background: none !important;
	}
</style>
