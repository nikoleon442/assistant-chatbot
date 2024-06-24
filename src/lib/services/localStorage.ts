import type { CreateMessage, Message } from 'ai';
// import type { Message } from '$lib/svelte-ai/shared/types';

export const getCurrentThreadId = (): string | undefined => {
	const threadId = localStorage.getItem('threadId');
	return threadId ?? undefined;
};

export const setCurrentThreadId = (threadId: string) => {
	localStorage.setItem('threadId', threadId);
};

export const clearThreadId = () => {
	localStorage.removeItem('threadId');
};

export const getExistingMessages = (): Message[] => {
	const messages = localStorage.getItem('messages');
	if (!messages) return [];
	return JSON.parse(messages) as Message[];
};

export const addNewMessage = (message: Message | CreateMessage) => {
	const messages = getExistingMessages();
	localStorage.setItem('messages', JSON.stringify([...messages, message]));
};

export const clearMessages = () => {
	localStorage.removeItem('messages');
};

export const removeLastMessage = () => {
	const messages = getExistingMessages();
	messages.pop();
	localStorage.setItem('messages', JSON.stringify(messages));
};
