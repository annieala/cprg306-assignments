'use client';

import { useUserAuth } from './_utils/auth-context';
import { useRouter } from 'next/navigation'; // 🔥 Import router

export default function AuthExample() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter(); // 🔥 Use router

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
      router.push('/week-9/shopping-list'); // 🔥 Redirect after login
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <main className="p-8">
      {!user ? (
        <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 rounded">
          Login with GitHub
        </button>
      ) : (
        <div>
          <p>
            Welcome, {user.displayName} ({user.email})
          </p>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded mt-2">
            Logout
          </button>
        </div>
      )}
    </main>
  );
}
