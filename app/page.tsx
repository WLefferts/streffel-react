import { cookies } from "next/headers";
import { PostList } from "./posts";
import { LogoutButton } from "./components/LogoutButton";
import { LoginButton } from "./components/LoginButton";

export default async function Home() {
  const session = (await cookies()).get("session");
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-6xl px-4 py-8 bg-white dark:bg-black">
        {/* header section */}
        <header className="mb-12">
          <div className="flex items-center justify-end">
            {session ? (
              <a href="/admin" className="text-blue-500 hover:underline">
                Admin
              </a>
            ) : (
              <LoginButton />
            )}
          </div>
        </header>
        {/* intro section */}
        <section className="mb-12 border border-gray-300 dark:border-zinc-600 rounded-lg p-6">
          <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
            Welcome to Streffel's Space Blog
          </h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Here, you'll find stunning images of space — captured through a
            telescope — showcasing the wonders that float above us. Take a
            moment to explore and enjoy the beauty of the cosmos.
          </p>
        </section>

        <PostList />

        {/* <CreateNewPost /> */}
      </main>
    </div>
  );
}
