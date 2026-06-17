'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { registerUser } from "@/actions/authActions";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    department: '',
    password: '',
    confirmPassword: '',
    agreedToTerms: false,
    role: 'STUDENT',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]:
      e.target instanceof HTMLInputElement && e.target.type === "checkbox"
        ? e.target.checked
        : value,
  }));
};

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  if (!formData.agreedToTerms) {
    alert("Please accept the terms and conditions");
    return;
  }

  setIsLoading(true);
  const result = await registerUser(
    formData.name,
    formData.email,
    formData.password,
    formData.role
  );

  if (result.success) {
    alert("OTP sent to your email!");

    router.push(
      `/auth/verify-otp?email=${encodeURIComponent(formData.email)}`
    );
  } else {
    alert(result.message);
    setIsLoading(false);
  }
};

  const handleGoogleSignUp = async () => {
    setIsLoading(true);
    await signIn("google", { redirect: true, redirectTo: "/dashboard" });
  };

  const handleFacebookSignUp = async () => {
    setIsLoading(true);
    await signIn("facebook", { redirect: true, redirectTo: "/dashboard" });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Registration Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 bg-white overflow-y-auto">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex items-center justify-center mb-6">
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-4">
              <span className="text-4xl">🎯</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">Join EventHub</h1>
          <p className="text-gray-600 text-center mb-8">Create your account to get started</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="you@college.edu"
              />
            </div>

            {/* University & Department */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">University</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your university"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Department</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  disabled={isLoading}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="Your department"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-3 top-3 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all text-gray-900 placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="••••••••"
              />
            </div>

            {/* Role */}
            <div>
              <label className="block text-gray-700 font-semibold mb-2 text-sm">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                disabled={isLoading}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-all text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <option value="STUDENT">Student</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            {/* Terms & Conditions */}
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="agreedToTerms"
                id="terms"
                checked={formData.agreedToTerms}
                onChange={handleChange}
                disabled={isLoading}
                className="w-4 h-4 mt-1 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                  Terms and Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 font-semibold hover:underline">
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-lg font-bold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-500 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Register */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button 
              type="button"
              onClick={handleFacebookSignUp}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-lg py-2 hover:border-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-xl">📘</span>
              <span className="text-sm font-semibold text-gray-700">Facebook</span>
            </button>
            <button 
              type="button"
              onClick={handleGoogleSignUp}
              disabled={isLoading}
              className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-lg py-2 hover:border-blue-600 hover:bg-blue-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="text-xl">📧</span>
              <span className="text-sm font-semibold text-gray-700">Google</span>
            </button>
          </div>

          {/* Sign In Link */}
          <p className="text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-blue-600 font-semibold hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Event Background */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 flex-col items-center justify-center p-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute top-12 left-8 text-6xl animate-pulse opacity-80">🎉</div>
        <div className="absolute top-1/4 right-12 text-5xl animate-bounce opacity-75">🎊</div>
        <div className="absolute bottom-24 left-1/3 text-7xl opacity-70">🌟</div>
        <div className="absolute bottom-12 right-8 text-6xl animate-pulse opacity-80">✨</div>
        <div className="absolute top-1/3 right-1/4 text-5xl opacity-65">🎓</div>
        <div className="absolute bottom-1/3 left-1/4 text-6xl animate-bounce opacity-75">🎈</div>

        {/* Main Content */}
        <div className="relative z-10 text-center text-white max-w-md">
          <div className="text-7xl mb-6 animate-bounce">🎉</div>
          <h2 className="text-5xl font-bold mb-4">Become a Member</h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with thousands of students, attend amazing events, and build lifelong friendships!
          </p>

          {/* Features */}
          <div className="space-y-4 mt-12 text-left bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎯</span>
              <div>
                <p className="font-bold">Explore Events</p>
                <p className="text-blue-100 text-sm">Discover events tailored to your interests</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">👥</span>
              <div>
                <p className="font-bold">Connect & Network</p>
                <p className="text-blue-100 text-sm">Meet like-minded people and make new friends</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="font-bold">Earn Certificates</p>
                <p className="text-blue-100 text-sm">Get recognized for your participation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}