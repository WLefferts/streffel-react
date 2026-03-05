import { neon } from '@neondatabase/serverless';

export function CreateNewPost() {
    // handler for creating a blog post
    async function createPost(formData: FormData) {
        'use server';
        const sql = neon(`${process.env.DATABASE_URL}`);
        const title = formData.get('title');
        const body = formData.get('body');
        await sql`INSERT INTO posts (title, body) VALUES ($1, $2)`;
    }

    return (
        <>
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-2">New Post</h2>
                <form action={createPost} className="flex flex-col gap-2">
                    <input
                        type="text"
                        name="title"
                        placeholder="Post title"
                        className="border px-2 py-1"
                    />
                    <textarea
                        name="body"
                        placeholder="Post body"
                        className="border px-2 py-1"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-3 py-1">
                        Save Post
                    </button>
                </form>
            </section>
        </>
    );
}