import { PostList } from './posts';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-6xl px-4 py-8 bg-white dark:bg-black">
        {/* intro section */}
        <section className="mb-12 border border-gray-300 dark:border-zinc-600 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            Welcome to Streffel's Space Blog
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Here, you'll find stunning images of space — captured through a telescope — showcasing
            the wonders that float above us.
          </p>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Take a moment to explore and enjoy the beauty of the cosmos.
          </p>
        </section>

        <PostList />

        {/* <CreateNewPost /> */}
      </main>
    </div>
  );
}