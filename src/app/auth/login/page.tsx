'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  setError("");
  setIsLoading(true);

  const result = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  if (result?.error) {
    setError("Invalid email or password");
    setIsLoading(false);
    return;
  }

  router.push("/dashboard");
};

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    await signIn("google", { redirect: true, redirectTo: "/dashboard" });
  };

  const handleFacebookSignIn = async () => {
    setIsLoading(true);
    await signIn("facebook", { redirect: true, redirectTo: "/dashboard" });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4">
              <span className="text-4xl">🎯</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">Welcome Back</h1>
          <p className="text-gray-600 text-center mb-8">Sign in to your EventHub account</p>

          {error && (
            <div className="bg-red-100 border-l-4 border-red-600 text-red-700 p-4 mb-6 rounded">
              {error}
            </div>
          )}

        

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all text-gray-900 placeholder-gray-500"
                placeholder="you@college.edu"
                disabled={isLoading}
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all text-gray-900 placeholder-gray-500"
                  placeholder="••••••••"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-600 hover:text-gray-900"
                  disabled={isLoading}
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2 text-gray-700">
                <input type="checkbox" className="w-4 h-4" disabled={isLoading} />
                Remember me
              </label>
              <Link href="/auth/forgot-password" className="text-blue-600 font-semibold hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <button 
              type="button" 
              onClick={handleFacebookSignIn}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-lg py-2 hover:border-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-xl">📘</span>
              <span className="text-sm font-semibold text-gray-700">Facebook</span>
            </button>
            <button 
              type="button" 
              onClick={handleGoogleSignIn}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-lg py-2 hover:border-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-xl">📧</span>
              <span className="text-sm font-semibold text-gray-700">Google</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="text-center text-gray-600">
            Don't have an account?{' '}
            <Link href="/auth/register" className="text-blue-600 font-semibold hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Event Background */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 text-6xl animate-bounce opacity-80">🎪</div>
        <div className="absolute top-20 right-20 text-5xl animate-pulse opacity-70">🎭</div>
        <div className="absolute bottom-20 left-1/4 text-7xl animate-bounce opacity-75">🎬</div>
        <div className="absolute bottom-10 right-10 text-6xl animate-pulse opacity-80">🎨</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-60">🎸</div>
        <div className="absolute bottom-1/3 left-1/3 text-6xl opacity-70">🎪</div>

        {/* Main Content */}
        <div className="relative z-10 text-center text-white max-w-md">
          <div className="text-7xl mb-6 animate-bounce">🎯</div>
          <h2 className="text-5xl font-bold mb-4">Join EventHub</h2>
          <p className="text-xl text-blue-100 mb-8">
            Discover amazing events, connect with people, and create unforgettable memories!
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div>
              <p className="text-3xl font-bold">500+</p>
              <p className="text-blue-100 text-sm">Events</p>
            </div>
            <div>
              <p className="text-3xl font-bold">50K+</p>
              <p className="text-blue-100 text-sm">Members</p>
            </div>
            <div>
              <p className="text-3xl font-bold">1000+</p>
              <p className="text-blue-100 text-sm">Registered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}