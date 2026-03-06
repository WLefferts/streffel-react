'use client';

import { useRouter } from 'next/navigation';

export function LogoutButton() {
    const router = useRouter();
    const handleLogout = async () => {
        await fetch('/api/logout', { method: 'POST' });
        router.push('/');
    };

    return (
        <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 dark:bg-red-700 dark:hover:bg-red-800"
        >
            Logout
        </button>
    );
}
