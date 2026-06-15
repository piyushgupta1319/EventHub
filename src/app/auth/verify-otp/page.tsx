"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { verifyOTP } from "@/actions/authActions";

export default function VerifyOTPPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const sp = new URLSearchParams(window.location.search);
    setEmail(sp.get("email") || "");
  }, []);

  const [otp, setOTP] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const result = await verifyOTP(email, otp);

    setMessage(result.message);

    if (result.success) {
      alert("Email verified successfully!");

      setTimeout(() => {
        router.push("/auth/login");
      }, 1500);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px]">
        <h1 className="text-3xl font-bold text-center mb-6">
          Verify Email
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="email"
            value={email}
            readOnly
            className="w-full border p-3 rounded bg-gray-100 text-gray-900"
          />

          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
            className="w-full border p-3 rounded text-gray-900 placeholder-gray-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
          >
            Verify OTP
          </button>

        </form>

        {message && (
          <p className="mt-4 text-center font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
}