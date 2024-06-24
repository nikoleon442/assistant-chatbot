<script lang="ts">
	import { onMount, afterUpdate } from 'svelte';
	import ChatMessage from './ChatMessage.svelte';
	import { AI_ASSISTANT, AI_AVATAR_PATH, AI_DESCRIPTION } from '$lib/config';
	import type { UseAssistantHelpers } from '$lib/svelte-ai/svelte';

	export let messages: UseAssistantHelpers['messages'];

	let chatHistory: HTMLElement;

	onMount(() => {
		scrollToBottom();
	});

	afterUpdate(() => {
		scrollToBottom();
	});

	function scrollToBottom() {
		if (chatHistory) {
			chatHistory.scrollTop = chatHistory.scrollHeight;
		}
	}
</script>

<div class=" row-span-3 flex flex-col justify-center space-y-1">
	<img
		class=" mx-auto inline-block h-[50px] w-[50px] rounded-full ring-2 ring-white lg:h-[70px] lg:w-[70px] 2xl:h-[100px] 2xl:w-[100px]"
		src={AI_AVATAR_PATH}
		alt=""
	/>

	<div class=" text-center text-slate-900">
		{AI_ASSISTANT}
		<p class="text-slate-500">{AI_DESCRIPTION}</p>
	</div>
</div>
<div
	class="row-span-9 overflow-y-auto transition ease-linear scrollbar scrollbar-thumb-secondary scrollbar-thumb-rounded-full scrollbar-w-2 hover:scrollbar-thumb-primary"
	bind:this={chatHistory}
>
	{#each $messages as message, index}
		<ChatMessage {message} />
		{#if index < $messages.length - 1}
			<div class="my-3 h-[1px] w-full"></div>
		{/if}
	{/each}
</div>
