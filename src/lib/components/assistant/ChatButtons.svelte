<script lang="ts">
	import { clearMessages, clearThreadId } from '$lib/services/localStorage';
	import type { UseAssistantHelpers } from '$lib/svelte-ai/svelte';
	import IconRefresh from '../ui/icons/IconRefresh.svelte';
	import IconStop from '../ui/icons/IconStop.svelte';
	import IconTrash from '../ui/icons/IconTrash.svelte';

	export let messages: UseAssistantHelpers['messages'];
	export let status: UseAssistantHelpers['status'];
	export let setMessages: UseAssistantHelpers['setMessages'];
	export let stop: UseAssistantHelpers['stop'];

	const clearChat = () => {
		// clear local storage data
		clearMessages();
		clearThreadId();
		// clear state data
		setMessages([]);
		// refresh page so that new thread id is created
		location.reload(); // this could be improved... just because useAssitant needs to be reinitialized
	};
</script>

<div class=" flex h-10 items-center justify-center gap-2 text-text">
	{#if $status == 'in_progress'}
		<button
			on:click={() => stop()}
			class="flex items-center justify-center rounded-md bg-slate-200 p-1 transition ease-linear hover:bg-slate-400"
		>
			<IconStop class="mr-2" />
			Stop generating
		</button>
	{:else if $status == 'awaiting_message' && $messages?.length > 0}
		<!-- <button
			on:click={reloadResponse}
			class="flex items-center justify-center rounded-md bg-slate-200 p-1 transition ease-linear hover:bg-slate-400"
		>
			<IconRefresh class="mr-2" />
			Regenerate response
		</button> -->
		<button
			class="flex items-center justify-center rounded-md bg-slate-200 p-1 transition ease-linear hover:bg-slate-400"
			on:click={clearChat}
		>
			<IconTrash class="mr-2" />
			Clear Chat
		</button>
	{/if}
</div>
