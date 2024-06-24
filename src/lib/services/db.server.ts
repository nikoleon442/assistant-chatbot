import { sql } from '@vercel/postgres';
import { ASSISTANT_ID } from '$lib/config';

export const addMessageToDb = (
	threadId: string,
	message: string,
	role: 'user' | 'asst',
	userId: string | null = null,
	email: string | null = null
) => {
	// return sql`INSERT INTO messages (assistant_id, thread_id, role, content, timestamp, user_id, email)
	// VALUES (${ASSISTANT_ID}, 'thread_example_id', 'ROLE', 'This is an example message content.', '2024-05-11 12:00:00', 'username_example', 'example@example.com');`;
	return sql`
    INSERT INTO messages (assistant_id, thread_id, role, content, timestamp, user_id, email)
    VALUES (${ASSISTANT_ID}, 
    ${threadId}, ${role}, ${message}, 
    (to_timestamp(${Date.now()} / 1000.0)), ${userId}, ${email});    
    `;
};
