<script lang="ts">
	import ChatMessageActions from './ChatMessageActions.svelte';
	import { IconOpenAI, IconUser } from '$lib/components/ui/icons';
	import { AI_AVATAR_PATH, USER_AVATAR_PATH } from '$lib/config';
	import { cn } from '$lib/utils';
	import type { Message } from 'ai';

	export let message: Message;
</script>

<div class={cn('group relative mb-2 flex items-start text-text')} {...$$restProps}>
	<div
		class={cn(
			'flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md shadow',
			message.role === 'user' ? 'bg-slate-50' : 'bg-slate-200'
		)}
	>
		{#if message.role === 'user'}
			<IconUser src={USER_AVATAR_PATH} />
		{:else}
			<IconUser src={AI_AVATAR_PATH} />
		{/if}
	</div>
	<div class="ml-4 flex-1 space-y-2 overflow-hidden px-1">
		{message.content}
	</div>
	<ChatMessageActions {message} />
</div>
