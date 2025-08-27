<script lang="ts">
	import '../app.css';
	import LoadingBar from '$lib/components/LoadingBar.svelte';

	let { children } = $props();
</script>

{@render children?.()}

<LoadingBar />
