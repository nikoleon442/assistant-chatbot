<script lang="ts">
	import { IconArrowElbow } from '$lib/components/ui/icons';
	import type { UseAssistantHelpers } from '$lib/svelte-ai/svelte';

	export let input: UseAssistantHelpers['input'];
	export let submitMessage: UseAssistantHelpers['submitMessage'];
	export let status: UseAssistantHelpers['status'];

	async function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' && !event.shiftKey) {
			submitMessage(event);
		}
	}
</script>

<form on:submit={submitMessage}>
	<div class="relative flex w-full overflow-hidden rounded-lg bg-background px-2">
		<textarea
			tabindex={0}
			rows={1}
			on:keydown={handleKeydown}
			bind:value={$input}
			placeholder="Send a message."
			spellcheck={false}
			class="min-h-[60px] w-full resize-none rounded-lg bg-white px-4 py-[1.3rem] text-text focus-within:outline-none sm:text-sm"
		/>

		<button class="relative right-8" disabled={$status !== 'awaiting_message' || $input === ''}>
			<IconArrowElbow />
			<span class="sr-only">Send message</span>
		</button>
	</div>
</form>
