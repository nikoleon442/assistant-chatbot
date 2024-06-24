import { sql } from '@vercel/postgres';
import { ASSISTANT_ID } from '$lib/config';

export const addMessageToDb = (
	threadId: string,
	message: string,
	role: 'user' | 'asst',
	userId: string | null = null,
	email: string | null = null
) => {
  // if no db vars set, just return
  if (!process.env.POSTGRES_URL) {
    console.log("No DB connections set.")
    return
  }	
  return sql`
    INSERT INTO messages (assistant_id, thread_id, role, content, timestamp, user_id, email)
    VALUES (${ASSISTANT_ID}, 
    ${threadId}, ${role}, ${message}, 
    (to_timestamp(${Date.now()} / 1000.0)), ${userId}, ${email});    
    `;
};
