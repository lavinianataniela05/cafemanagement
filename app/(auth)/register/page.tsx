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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

        <label className="block mb-2">
          <span className="text-gray-700">Nama</span>
          <input
            type="username"
            name="username"
            className="mt-1 block w-full border rounded px-3 py-2"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">Email</span>
          <input
            type="email"
            name="email"
            className="mt-1 block w-full border rounded px-3 py-2"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="block mb-2">
          <span className="text-gray-700">No Telp</span>
          <input
            type="number"
            name="number"
            className="mt-1 block w-full border rounded px-3 py-2"
            required
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </label>

        <label className="block mb-4">
          <span className="text-gray-700">Password</span>
          <input
            type="password"
            name="password"
            className="mt-1 block w-full border rounded px-3 py-2"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          onClick={() => handleRegister({ username, email, number, password })}
        >
          Register
        </button>
      </div>
    </div>
  );
}
