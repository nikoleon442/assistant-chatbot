<script lang="ts">
	import { useAssistant } from '$lib/svelte-ai/svelte';
	import ChatList from '$lib/components/global/ChatList.svelte';
	import ChatButtons from '$lib/components/assistant/ChatButtons.svelte';
	import PromptForm from '$lib/components/assistant/PromptForm.svelte';
	import {
		addNewMessage,
		getCurrentThreadId,
		getExistingMessages,
		setCurrentThreadId
	} from '$lib/services/localStorage';

	const { status, messages, input, submitMessage, threadId, setMessages, stop } = useAssistant({
		api: '/api/assistant',
		threadId: getCurrentThreadId(),
		onMessage: addNewMessage
	});
	// set initial messages if any
	setMessages(getExistingMessages());

	$: {
		if ($threadId && $threadId !== getCurrentThreadId()) {
			console.log('setting thread id');
			setCurrentThreadId($threadId);
		}
	}
</script>

<div class="row-span-9 mx-auto grid w-full grid-rows-12 px-2">
	<ChatList {messages} />
</div>

<div class="row-span-2 flex flex-col justify-center">
	<div class="mx-auto w-full space-x-2 px-2">
		<ChatButtons {messages} {status} {stop} {setMessages} />

		<div class="  bg-background px-2 py-1">
			<PromptForm {input} {submitMessage} {status} />
		</div>
	</div>
</div>
<!-- <Chat /> -->
