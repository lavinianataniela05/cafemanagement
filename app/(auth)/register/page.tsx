"use client";
import { useState } from "react";
import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";

const userSchema = z.object({
  username: z.string().min(1, "Username is required"),
  email: z.string().email("Invalid email address"),
  number: z.string().min(1, "Number is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export default function Register() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (values: z.infer<typeof userSchema>) => {
    try {
      const parsedData = userSchema.parse({
        username: values.username,
        email: values.email,
        number: values.number,
        password: values.password,
      });

      const response = await axios.post("/api/user", parsedData);
      if (response.status === 201) {
        console.log("Registration successful:", response.data); // ini nanti ganti sama toast
      } else if (response.status === 400) {
        console.log("Registration failed:", response.data); // ini nanti ganti sama toast
      } else if (response.status === 500) {
        console.log("Server error:", response.data); // ini nanti ganti sama toast
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const status = error.response.status;
        if (status === 409) {
          console.log("409 error:", error.response.data); // ini nanti ganti sama toast
        } else if (status === 500) {
          console.log("500 error:", error.response.data); // ini nanti ganti sama toast
        }
      } else {
        console.error("Unexpected error:", error); // ini nanti ganti sama toast
      }
    } finally {
      router.push("/login"); // Redirect to login page after registration
    }
  };

  return (
<div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8f1e5] to-[#f0e2cc] from-amber-50 to-white dark:from-neutral-900 dark:to-neutral-950">
<div className="bg-amber-20 p-8 rounded-2xl shadow-xl w-full max-w-md border border-amber-200 transform transition-all hover:shadow-2xl">
    
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
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      </div>
    </div>

    <h2 className="text-3xl font-bold mb-2 text-center text-amber-900 font-sans text-[#3b2e28]">
      Join Our Cafe
    </h2>
    <p className="text-amber-700 text-center mb-6 italic">
      Create an account to start your coffee journey
    </p>

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
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-amber-800 mb-1 font-sans text-[#3b2e28]">
          Full Name
        </label>
        <div className="relative">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-amber-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none bg-amber-50 placeholder-amber-400"
            placeholder="Your name"
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-amber-800 mb-1 font-sans text-[#3b2e28]">
          Email
        </label>
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

      {/* Phone Number */}
      <div>
        <label className="block text-sm font-medium text-amber-800 mb-1 font-sans text-[#3b2e28]">
          Phone Number
        </label>
        <div className="relative">
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-amber-700 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all outline-none bg-amber-50 placeholder-amber-400"
            placeholder="+62 123 4567 8901"
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
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-amber-800 mb-1 font-sans text-[#3b2e28]">
          Password
        </label>
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

      {/* Button */}
      <button
        type="button"
        onClick={() => handleRegister({ username, email, number, password })}
        className="w-full py-3 px-4 bg-amber-900 hover:bg-amber-800 focus:ring-amber-500 focus:ring-offset-2 text-white font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 shadow-md hover:shadow-lg"
      >
        Create Account
      </button>
    </div>

    <div className="mt-6 text-center text-sm text-amber-700">
      Already have an account?{" "}
      <button
        onClick={() => router.push("/login")}
        className="font-medium text-amber-800 hover:text-amber-900 underline bg-transparent border-none cursor-pointer"
      >
        Sign in
      </button>
    </div>

    <div className="mt-6 flex justify-center">
      <div className="w-full border-t border-amber-300"></div>
    </div>

    <div className="mt-4 text-center text-xs text-amber-600 italic">
      We'll brew your perfect cup when you arrive
    </div>
    
  </div>
</div>

  );
}
