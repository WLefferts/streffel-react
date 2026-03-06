"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      alert("Invalid login");
    }
  }

  return (
    <main className="flex items-center justify-center h-screen bg-white dark:bg-black">
      <div className="flex flex-col items-center gap-4">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 border rounded"
          />

          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border rounded"
          />

          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
