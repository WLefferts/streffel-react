import { neon } from '@neondatabase/serverless';
import { Post } from '../post';

export async function PostList() {
    const sql = neon(`${process.env.DATABASE_URL}`);
    var posts = await sql`SELECT * FROM posts ORDER BY id DESC`;

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-semibold text-black dark:text-zinc-50 mb-6">
                All Posts
            </h2>
            {posts.length === 0 ? (
                <p className="text-zinc-600 dark:text-zinc-400">No posts yet.</p>
            ) : (
                <div className="flex flex-col gap-6">
                    {posts.map((post: any) => (
                        <Post key={post.id} title={post.title} body={post.body} />
                    ))}
                </div>
            )}
        </section>
    );
}