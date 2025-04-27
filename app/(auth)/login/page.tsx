// app/login/page.tsx

"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Email atau password salah");
    } else {
      router.push("/"); // redirect setelah login sukses
    }
  };

  return (
    

<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8f1e5] to-[#f0e2cc] from-amber-50 to-white dark:from-neutral-900 dark:to-neutral-950">
  <form
    onSubmit={handleLogin}
    className="bg-amber-20 p-8 rounded-2xl shadow-xl w-full max-w-md border border-amber-200 transform transition-all hover:shadow-2xl"
  >
    <div className="flex justify-center mb-6">
      <div className="w-20 h-20 rounded-full bg-amber-100 flex items-center justify-center border-2 border-amber-300 shadow-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-amber-700"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      </div>
    </div>

    <h2 className="text-3xl font-bold mb-2 text-center text-amber-900 font-sans text-[#3b2e28]">Welcome to Our Cafe</h2>
    <p className="text-amber-700 text-center mb-8 italic">Sign in to your account to continue</p>

    {error && (
      <div className="mb-6 p-3 bg-red-100 text-amber-900 rounded-lg text-sm flex items-center border border-amber-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2 text-amber-800"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        {error}
      </div>
    )}

    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-amber-800 mb-1 font-sans text-[#3b2e28]">Email</label>
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-amber-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none bg-amber-50 placeholder-amber-400"
            placeholder="your@email.com"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-amber-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-amber-800 mb-1 font-sans text-[#3b2e28]">Password</label>
        <div className="relative">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-amber-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none bg-amber-50 placeholder-amber-400"
            placeholder="••••••••"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-amber-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-800">
            Remember me
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-amber-900 hover:bg-amber-800 focus:ring-amber-500 focus:ring-offset-2 text-white font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md hover:shadow-lg"
      >
        Sign in
      </button>
    </div>

    <div className="mt-6 text-center text-sm text-amber-700">
      Don't have an account?{" "}
      <a
        href="#"
        onClick={() => router.push("/register")}
        className="font-medium text-amber-800 hover:text-amber-900 underline"
      >
        Sign up
      </a>
    </div>
    
    <div className="mt-6 flex justify-center">
      <div className="w-full border-t border-amber-300"></div>
    </div>
    
    <div className="mt-4 text-center text-xs text-amber-600 italic">
      Enjoy your coffee experience with us
    </div>
  </form>
</div>
  );
}
