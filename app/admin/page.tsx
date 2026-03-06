import { LogoutButton } from "../components/LogoutButton";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="w-full max-w-6xl px-4 py-8 bg-white dark:bg-black">
        <a href="/" className="text-blue-500 hover:underline">
          Go back to home
        </a>
        <h1 className="text-3xl font-bold text-black dark:text-zinc-50">
          Admin Page
        </h1>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 mb-6 ">
          This is the admin page. Only logged in users can see this.
        </p>
        <LogoutButton />
      </main>
    </div>
  );
}
