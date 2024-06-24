<script lang="ts">
	import { IconCheck, IconCopy } from '$lib/components/ui/icons';
	import { cn } from '$lib/utils';
	import type { Message } from 'ai';
	// @ts-ignore
	import CopyToClipboard from 'svelte-copy-to-clipboard';

	export let message: Message;

	let isCopied = false;

	function handleCopied() {
		isCopied = true;
		setTimeout(() => {
			isCopied = false;
		}, 2000);
	}
</script>

<div
	class="flex items-center justify-end transition-opacity group-hover:opacity-100"
	{...$$restProps}
>
	<CopyToClipboard text={message.content} on:copy={handleCopied} let:copy>
		<button on:click={copy}>
			{#if isCopied}
				<IconCheck />
			{:else}
				<IconCopy />
			{/if}
			<span class="sr-only">Copy message</span>
		</button>
	</CopyToClipboard>
</div>
