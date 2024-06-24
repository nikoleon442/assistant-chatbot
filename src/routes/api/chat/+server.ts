// import type { Config } from '@sveltejs/adapter-vercel';
// import { OpenAIStream, StreamingTextResponse } from 'ai';
// import { Configuration, OpenAIApi } from 'openai-edge';

// import { env } from '$env/dynamic/private';

// import type { RequestHandler } from './$types';
// import { MODEL } from '$lib/config';

// export const config: Config = {
// 	runtime: 'edge'
// };

// export const POST = (async ({ request }) => {
// 	const json = await request.json();
// 	const { messages, previewToken } = json;

// 	// Create an OpenAI API client
// 	const config = new Configuration({
// 		apiKey: previewToken || env.OPENAI_API_KEY
// 	});
// 	const openai = new OpenAIApi(config);

// 	// Ask OpenAI for a streaming chat completion given the prompt
// 	const response = await openai.createChatCompletion({
// 		model: MODEL,
// 		messages: [
// 			{
// 				role: 'system',
// 				content: 'You are a helpful assistant who needs to respond like Kanye West.'
// 			},
// 			...messages
// 		],
// 		temperature: 0.7,
// 		stream: true
// 	});

// 	// Convert the response into a friendly text-stream
// 	const stream = OpenAIStream(response, {
// 		async onCompletion(completion) {
// 			const title = messages[0].content.substring(0, 100);
// 		}
// 	});

// 	// Respond with the stream
// 	return new StreamingTextResponse(stream);
// }) satisfies RequestHandler;
