"use client";

import { useState } from "react";
import { signupUser } from "@/actions/signupActions";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("STUDENT");

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    const result = await signupUser(
      name,
      email,
      password,
      role
    );

    alert(result.message);

    if (result.success) {
      router.push("/login");
    }
  }

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-6">

      <div className="bg-white shadow-xl rounded-3xl w-full max-w-md p-10 border border-slate-200">

        <h1 className="text-4xl font-bold text-slate-900 mb-2">
          Create Account
        </h1>

        <p className="text-slate-500 mb-8">
          Join EventHub today.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Name
            </label>

            <input
              type="text"
              required
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border border-slate-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Email
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full border border-slate-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            />

          </div>

          <div>
            <label className="block mb-2 font-medium text-slate-700">
              Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-slate-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            >
              <option value="STUDENT">Student</option>
              <option value="ADMIN">Admin</option>
            </select>
          </div>

          <div>

            <label className="block mb-2 font-medium text-slate-700">
              Password
            </label>

            <input
              type="password"
              required
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full border border-slate-300 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-600"
            />

          </div>

          <button
            className="
            w-full
            bg-slate-900
            hover:bg-black
            text-white
            py-3
            rounded-2xl
            font-semibold
            transition
            "
          >
            Sign Up
          </button>

        </form>

      </div>

    </div>
  );
}