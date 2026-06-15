"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { resetPassword } from "@/actions/authActions";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setEmail(sp.get("email") || "");
  }, []);

  const [otp, setOTP] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = await resetPassword(
      email,
      otp,
      newPassword
    );

    setMessage(result.message);

    if (result.success) {
      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
    }
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Reset Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            value={email}
            readOnly
            className="w-full border p-3 rounded bg-gray-100"
          />

          <input
            type="text"
            placeholder="Enter OTP"
            className="w-full border p-3 rounded text-gray-900 placeholder-gray-400"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="New Password"
            className="w-full border p-3 rounded text-gray-900 placeholder-gray-400"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white p-3 rounded"
          >
            Reset Password
          </button>

        </form>

        {message && (
          <p className="mt-4 text-center">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}